const express = require("express");

// set up express app
const app = express();

app.get("/", function (req, res) {
  console.log("GET request");
  res.send({ name: "asep" });
  //   res.end();
});

// listen for requests
app.listen(process.env.port || 4000, function () {
  console.log("listening port 4000");
});
