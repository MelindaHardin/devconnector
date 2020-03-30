const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB Connect");
  } catch (err) {
    console.error(err.message);
    process.exit(1); //exit the process if there is an error.
  }
};

module.exports = connectDB;
