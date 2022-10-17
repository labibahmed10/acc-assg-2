const mongoose = require("mongoose");

// the tour schema
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requied: true,
      trim: true,
      unique: true,
      minLength: [4, "The name of the tour name is too short"],
      maxLength: [50, "The name of the tour is too long"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      requied: true,
      min: [0, "Price can't be negative number"],
    },
    viewCount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const TourModel = new mongoose.Model("TourModel", tourSchema);
module.exports = TourModel;
