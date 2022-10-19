const TourModel = require("../model/Tour.Model");

exports.showAllProduct = async (query) => {
   const showResult = await TourModel.find({}).skip(query.skip).limit(query.limit).select(query.fields).sort(query.sort);

   // In case if I want to show the page number according to skip-limit combination

   // const productCount = await TourModel.countDocuments({});
   // const numberOfPage = Math.ceil(productCount / query.limit);

   return showResult;
};

exports.uploadASingleTour = async (body) => {
   const createTour = TourModel({ ...body, viewCount: 0 });
   const result = await createTour.save();
   return result;
};

exports.showSingleTourByID = async (id) => {
   let result = await TourModel.findOne({ _id: id });

   result.viewCount++;
   await result.save();

   return result;
};

exports.updateSingleTourDetailByID = async (body, id) => {
   const result = await TourModel.updateOne({ _id: id }, { $set: body }, { runValidators: true });
   return result;
};

exports.seeTopTrendingTour = async () => {
   const result = await TourModel.find({}).sort("-viewCount").limit(3);
   return result;
};

exports.seeTopCheapestTours = async () => {
   const result = await TourModel.find({}).sort("price").limit(3);
   return result;
};
