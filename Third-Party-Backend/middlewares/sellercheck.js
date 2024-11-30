const sellerModel = require("../models/seller");
const jwt = require("jsonwebtoken");
const sellerCheck = async (req, res, next) => {
  authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "Token not provided" });
  }

  const parts = authHeader.split(" ");

  try {
    const decoded = jwt.verify(parts[1], process.env.JWT_SECRET);
    const seller = sellerModel.findById(decoded.id);

    if (!seller) {
      return res.status(401).json({ message: "Seller not found" });
    }
    if (seller.type !== "seller") {
      return res.status(401).json({ message: "Users not allowed to sell" });
    }
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Token invalid" });
  }
};

module.exports = sellerCheck;
