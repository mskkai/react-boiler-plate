const path = require("path");
const express = require("express");
const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../public")));

const port = process.env.PORT || 3000;

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

app.listen(port, () => {
  console.log("server is up and running");
});
