const mongoose = require("mongoose");
const schema = mongoose.Schema;

/*
"geometry": {
  "type": "Point",
  "coordinates": [125.6, 10.1]
}
*/

// create geo location schema
const GeoSchema = new schema({
  type: {
    type: String,
    default: "Point",
  },
  coordinates: {
    type: [Number],
    index: "2dsphere",
  },
});

// create ninja schema & model
const NinjaSchema = new schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },
  // add in geo location
  geometry: GeoSchema,
});

const Ninja = mongoose.model("ninja", NinjaSchema);

module.exports = Ninja;
