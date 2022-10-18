const { uploadASingleTour, showAllProduct } = require("../services/tour.services");

module.exports.getAllTheTours = async (req, res, next) => {
   try {
      let { fields, sort } = { ...req.query };
      let query = {};

      // checking the values that came from user and making changes
      if (fields) {
         query.fields = fields.split(",").join(" ");
      }
      if (sort) {
         query.sort = sort.split(",").join(" ");
      }

      // page = 1 -> 1 - 10 >> skip = (page - 1) * limit > totalshowed
      // page = 2 -> 11 - 20 >> skip = (page - 1) * limit > totalshowed

      if (req.query.page) {
         let { page = 1, limit = 10 } = { ...req.query };
         query.skip = (Number(page) - 1) * Number(limit);
         query.limit = Number(limit);
      }

      const result = await showAllProduct(query);

      res.status(200).send({
         status: "success",
         message: "Tour data showed successfully",
         data: result,
      });
   } catch (error) {
      res.status(400).send({
         status: "failed",
         message: "Could not show all the product according to query",
         data: error.message,
      });
   }
};

module.exports.createATour = async (req, res, next) => {
   try {
      const body = req.body;

      const result = await uploadASingleTour(body);

      // sending success message
      res.status(200).send({
         status: "success",
         message: "Tour data added succesfully",
         data: result,
      });
   } catch (error) {
      // error message
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
