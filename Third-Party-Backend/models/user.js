const mongoose = require("mongoose");

const user = mongoose.Schema({
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
    type: String,
    maxLength: 20,
    required: [true, "user rip is required"],
  },
  type: {
    type: String,
    default: "user",
  },
});

module.exports = mongoose.model("Users", user);
