const productModel = require("../models/product");

const addProduct = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.user;
    const newProduct = await productModel.create({ ...body, seller: id });
    return res.status(200).json(newProduct);
  } catch (e) {
    return res.status(500).json(e);
  }
};

const allProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    return res.status(200).json(products);
  } catch (e) {
    return res.status(500).json(e);
  }
};

module.exports = { addProduct, allProducts };
