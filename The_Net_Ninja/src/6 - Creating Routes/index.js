const express = require("express");
// const routes = require("./routes/api");

// set up express app
const app = express();

// initialize routes
// app.use("/api", routes); // cara 1
app.use("/api", require("./routes/api")); // cara 2

// listen for requests
app.listen(process.env.port || 4000, function () {
  console.log("listening port 4000");
});
