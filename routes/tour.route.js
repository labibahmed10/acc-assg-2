const express = require("express");
const router = express.Router();
const tourController = require("../controller/tour.controller");

router.route("/tours")
.get(tourController.getAllTheTours)
.post(tourController.createATour);

module.exports = router;
