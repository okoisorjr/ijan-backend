const express = require("express");

const app = express();

const port = 11000;

app.get("/api/v1/ijan-authentication", (req, res) => {
  return res.send("Hello!....Welcome to Backend Engineering at IJAN!");
});

app.listen(port, () => {
  console.log("The server is currently running on port:", port);
});
