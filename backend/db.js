const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://atul:atul@cluster0.8cmhy.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Database Connected Boss");
  });
};

module.exports = connectToMongo;

