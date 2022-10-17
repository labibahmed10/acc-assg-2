const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = require("./index");

mongoose.connect(process.env.DATABASE).then(() => {
   console.log("Database was connected Successfully");
});

app.listen(port, () => {
   console.log(`The port is now connected to ${port}`);
});
