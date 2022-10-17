const express = require("express");
const app = express();
const cors = require("cors");


// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("The app is now running");
});

module.exports = app;
