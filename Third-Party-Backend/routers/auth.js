const express = require("express");
const authentication = require("../middlewares/auth");
const { login, register, switchUserType } = require("../controllers/user");
const validateRequest = require("../middlewares/validate-request");
const { registerSchema, loginSchema } = require("../schemas/userSchemas");

const authRouter = express.Router();

///

authRouter.route("/login").post(validateRequest(loginSchema), login);
authRouter.route("/register").post(validateRequest(registerSchema), register);
authRouter.route("/switch-type").patch(authentication, switchUserType);
authRouter.route("/").get(authentication, (req, res) => {
  res.json(req.user);
});
module.exports = authRouter;
