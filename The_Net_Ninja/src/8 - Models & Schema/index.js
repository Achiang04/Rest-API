const express = require("express");
const bodyParser = require("body-parser");

// set up express app
const app = express();

app.use(bodyParser.json());

// initialize routes
app.use("/api", require("./routes/api")); // cara 2

// listen for requests
app.listen(process.env.port || 4000, function () {
  console.log("listening port 4000");
});
