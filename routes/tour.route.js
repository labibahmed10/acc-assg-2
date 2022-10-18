const express = require("express");
const router = express.Router();
const tourController = require("../controller/tour.controller");

router.route("/tours")
.get(tourController.getAllTheTours)
.post(tourController.createATour);

router.route("/tours/:id")
.get(tourController.getTourDetailByID)

module.exports = router;
