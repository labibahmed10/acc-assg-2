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
      validate: {
        validator: function (value) {
          const integer = Number.isInteger(value);

          if (integer) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: `Price can not be {VALUE}, it should be a number`,
    },
    viewCount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// Model for tour management
const TourModel = mongoose.Model("TourModel", tourSchema);
module.exports = TourModel;
