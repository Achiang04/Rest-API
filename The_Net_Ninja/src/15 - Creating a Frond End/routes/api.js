const express = require("express");
const Ninja = require("../models/ninja");
const router = express.Router();

// get a list of ninjas from the db

router.get("/ninjas", function (req, res, next) {
  Ninja.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        },
        spherical: true,
        maxDistance: 100000,
        distanceField: "dist.calculated",
      },
    },
  ]).then(function (results) {
    res.send(results);
  });
});

// add a new ninja to db
router.post("/ninjas", function (req, res, next) {
  Ninja.create(req.body)
    .then(function (ninja) {
      res.send(ninja);
    })
    .catch(next);
});

// update a ninja in the db
router.put("/ninjas/:id", function (req, res, next) {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    Ninja.findOne({ _id: req.params.id }).then(function (ninja) {
      res.send(ninja);
    });
  });
});

// delete a ninja from the db
router.delete("/ninjas/:id", function (req, res, next) {
  // console.log(req.params.id);
  Ninja.findByIdAndRemove({ _id: req.params.id }).then(function (ninja) {
    res.send(ninja);
  });
});

module.exports = router;
