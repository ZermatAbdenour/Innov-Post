const mongoose = require("mongoose");

const seller = mongoose.Schema({
  userName: {
    type: String,
    maxLength: 20,
    required: [true, "the user name is required"],
  },
  password: {
    type: String,
    maxLength: 20,
    required: [true, "user password is required"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  rip: {
    type: Number,
    maxLength: 20,
    required: [true, "user rip is required"],
  },
});

module.exports = mongoose.model("Sellers", seller);
