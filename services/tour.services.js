const TourModel = require("../model/Tour.Model");

exports.showAllProduct = async (query) => {
   console.log(query);

   const showResult = await TourModel.find({}).select(query.fields).sort(query.sort);
   return showResult;
};

exports.uploadASingleTour = async (body) => {
   const result = await TourModel.create(body);
   return result;
};
