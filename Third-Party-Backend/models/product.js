const mongoose = require("mongoose");

const product = mongoose.Schema({
  name: {
    type: String,
    maxLength: 20,
    required: [true, "the product name is required"],
  },
  price: {
    type: Number,
    required: [true, "product price is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sellers",
  },
  description: {
    type: String,
    maxLength: 100,
    required: [true, "user description is required"],
  },
  imageUri: {
    type: String,
  },
});

module.exports = mongoose.model("Products", product);
