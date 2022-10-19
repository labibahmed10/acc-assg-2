const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

// routes for tour management
const tourRoutes = require("./routes/tour.route");

// middlewares
app.use(express.json());
app.use(cors());

// database connection
mongoose
   .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => {
      console.log(`Database connection is successful`);
   });

// routes for tour management
app.use("/api/v1", tourRoutes);

// basic check
app.get("/", (req, res, next) => {
   res.send("The API enpoints will show you Tour Management api's");
});

app.use("*", (req, res) => {
   res.send({
      status: 200,
      success: true,
      message:
         "Welcome to Tour management system API. Here is a brief documentation for you to get started. I have used mongoose for the flexibilty of database",
      documents: {
         "[GET] /api/v1/tours": "This endpoint will get you All the tour details and plans from database",

         "[GET] /api/v1/tours?fields=name,description&sort=price&page=2&limit=5":
            "This will show the tour details for selected fields and sort the price in accsending order and also paginated the whole api end point so that a user can easily acccess them",

         "[POST] /api/v1/tours":
            "This will take a new tour details from user end-point, as I have used mongoose so it will validate the body and then will upload to the database",

         "[GET] /api/v1/tours/:id": "This will take the id of a tour as a parameter and it will show the exact tour details",

         "[PATCH] /api/v1/tours/:id":
            "This will take an id of a tour as well as updating body from the user as an object, It will then update the given fields",

         "[GET] /api/v1/tours/trending": "This will show the top 3 viewed/trending tour details",

         "[GET] /api/v1/tours/cheapest": "This will show the top 3 cheapest tour details from price perspective",
      },
   });
});

app.listen(port, () => {
   console.log(`The port is now connected to ${port}`);
});
