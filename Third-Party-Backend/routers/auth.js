const express = require("express");
const authentication = require("../middlewares/auth");
const { login, register } = require("../controllers/user");
const validateRequest = require("../middlewares/validate-request");
const { registerSchema, loginSchema } = require("../schemas/userSchemas");

const router = express.Router();

///

router.route("/login").post(validateRequest(loginSchema), login);
router.route("/register").post(validateRequest(registerSchema), register);
router.route("/").get(authentication, (req, res) => {
  res.json(req.user);
});
module.exports = router;
