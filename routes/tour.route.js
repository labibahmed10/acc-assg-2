const express = require("express");
const router = express.Router();
const tourController = require("../controller/tour.controller");

// routes to see all the tour with some query from cliend site | post new tour details with proper validator
router.route("/tours")
.get(tourController.getAllTheTours)
.post(tourController.createATour);

// routes to get single tour by id and also update any one for any specific field
router.route("/tours/:id")
.get(tourController.getTourDetailByID)
.patch(tourController.updateTourDetailByID)

// route to see the top trending 3 tour details
router.route("/tour/trending")
.get(tourController.seeTrendingTour)

// route to see the cheapest 3 tour details
router.route("/tour/cheapest")
.get(tourController.seeCheapestTour)


module.exports = router;
