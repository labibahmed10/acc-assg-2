const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("The app is now running");
});

app.listen(port, () => {
  console.log(`The port is now connected to ${port}`);
});
