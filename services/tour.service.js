const TourModel = require("../model/Tour.Model");

exports.uploadASingleTour = async (body) => {
   const productCreate = new TourModel(body);
   const result = await productCreate.save();
   return result;
};
