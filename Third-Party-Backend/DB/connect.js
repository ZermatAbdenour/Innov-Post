const mongoose = require("mongoose");

const DBConnect = async (URI) => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = DBConnect;
