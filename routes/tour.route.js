const express = require("express");
const router = express.Router();
const tourController = require("../controller/tour.controller");

router.route("/tours").get(tourController.getAllTours);

module.exports = router;
