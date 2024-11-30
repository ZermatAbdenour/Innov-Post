const express = require("express");
const authentication = require("../middlewares/auth");
const { addProduct, allProducts } = require("../controllers/product");
const validateRequest = require("../middlewares/validate-request");
const { addProductSchema } = require("../schemas/productSchema");
const sellerCheck = require("../middlewares/sellercheck");
const productRouter = express.Router();

///

productRouter
  .route("/add")
  .post(validateRequest(addProductSchema), sellerCheck, addProduct);

productRouter.route("/").get(allProducts);

//
module.exports = productRouter;
