const mongoose = require("mongoose");

const connectToMongoDB = () => {
  try {
    return mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongoDB;
