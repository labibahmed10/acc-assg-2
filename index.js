const express = require("express");
const app = express();
const cors = require("cors");
const tourRoutes = require("./routes/tour.route");

// middlewares
app.use(express.json());
app.use(cors());

// routes for tour management
app.use("/api/v1", tourRoutes);

// basic check
app.get("/", (req, res, next) => {
   res.send("The app is now running");
});

module.exports = app;
