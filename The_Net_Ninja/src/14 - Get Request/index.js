const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// set up express app
const app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost/ninja", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// initialize routes
app.use("/api", require("./routes/api"));

// error handling middleware
app.use(function (err, req, res, next) {
  // console.log(err);
  res.status(422).send({ err: err.message });
});

// listen for requests
app.listen(process.env.port || 4000, function () {
  console.log("listening port 4000");
});
