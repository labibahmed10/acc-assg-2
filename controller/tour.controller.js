const {
   uploadASingleTour,
   showAllProduct,
   showSingleTourByID: showSingleTourByID,
   updateSingleTourDetailByID: updateSingleTourDetailByID,
} = require("../services/tour.services");

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

module.exports.getTourDetailByID = async (req, res, next) => {
   try {
      const { id } = req.params;
      const result = await showSingleTourByID(id);

      if (!result) {
         return res.status(200).send({
            status: "Facing Issues with Id",
            message: "There might be problem with the Id or data is loading,try again",
            data: result,
         });
      }

      res.status(200).send({
         status: "success",
         message: "Single tour details showed",
         data: result,
      });
   } catch (error) {
      // error message
      res.status(400).send({
         status: "failed",
         message: `The ID that you have given is not appropriate, please provide a valid ID to get the Detail`,
      });
   }
};

module.exports.updateTourDetailByID = async (req, res, next) => {
   try {
      const body = req.body;
      const { id } = req.params;
      const result = await updateSingleTourDetailByID(body, id);

      res.status(200).send({
         status: "success",
         message: "The tour detail is now updated",
         data: result,
      });
   } catch (error) {
      // error message
      res.status(400).send({
         status: "failed",
         message: `Your given ID is Invalid, please provide a valid ID to update the document`,
         data: error.message,
      });
   }
};

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
