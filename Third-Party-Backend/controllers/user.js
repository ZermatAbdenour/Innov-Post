const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const userModel = require("../models/user");

const login = async (req, res) => {
  const body = req.body;
  const user = await userModel.findOne({ email: body.email });
  console.log(user);
  if (!user || user.password !== body.password)
    return res
      .status(400)
      .json({ result: "the user email or password is wrong" });

  const token = jwt.sign(
    {
      id: user._id,
      userName: user.userName,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return res.status(200).json({ token: token });
};

const register = async (req, res) => {
  const body = req.body;
  const existedUser = await userModel.findOne({ email: body.email });
  if (existedUser)
    return res
      .status(400)
      .json({ result: `user name with email : ${body.email} already exist` });

  if (body.password !== body.repeatPassword)
    return res
      .status(400)
      .json({ result: "password and repeat password are not the same" });
  const { repeatPassword, ...userBody } = body;

  const user = await userModel.create(userBody);
  return res.status(200).json(user);
};

const getAllUsers = async (req, res) => {
  const users = await userModel.find();
  return res.status(200).json(users);
};

const switchUserType = async (req, res) => {
  const id = req.user.id;
  const user = await userModel.findById(id);
  if (!user) return res.status(404).json({ result: "user not found" });
  user.type = user.type === "seller" ? "user" : "seller";
  await user.save();
  return res.status(200).json(user);
};

module.exports = { login, register, switchUserType };
