const { uploadASingleTour } = require("../services/tour.service");

module.exports.getAllTheTours = async (req, res, next) => {
   try {
   } catch (error) {}
};

module.exports.createATour = async (req, res, next) => {
   try {
      const body = req.body;
      console.log(body);

      const result = await uploadASingleTour(body);
      res.status(200).send({
         status: "success",
         message: "Tour data added succesfully",
         data: result,
      });
   } catch (error) {
      res.status(400).send({
         status: "failed",
         message: "Could not add the tour data",
         data: error.message,
      });
   }
};

// module.exports.getTourDetailByID = async (req, res, next) => {
//    try {
//       post;
//    } catch (error) {}
// };

// module.exports.uddateTourById = async (req, res, next) => {
//    try {
//       post;
//    } catch (error) {}
// };

// module.exports.seeTrendingTour = async (req, res, next) => {
//    try {
//       post;
//    } catch (error) {}
// };

// module.exports.seeCheapestTour = async (req, res, next) => {
//    try {
//       post;
//    } catch (error) {}
// };
