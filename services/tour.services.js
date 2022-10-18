const TourModel = require("../model/Tour.Model");

exports.showAllProduct = async (query) => {
   const showResult = await TourModel.find({})
   .skip(query.skip)
   .limit(query.limit)
   .select(query.fields)
   .sort(query.sort);

   // In case if I want to show the page number according to skip-limit combination

   // const productCount = await TourModel.countDocuments({});
   // const numberOfPage = Math.ceil(productCount / query.limit);

   return showResult;
};

exports.uploadASingleTour = async (body) => {
   const result = await TourModel.create(body);
   return result;
};
