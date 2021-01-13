const mongoose = require("mongoose");
const schema = mongoose.Schema;

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
});

const Ninja = mongoose.model("ninja", NinjaSchema);

module.exports = Ninja;
