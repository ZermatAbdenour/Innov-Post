const Joi = require("joi");

addProductSchema = Joi.object({
  name: Joi.string().required().max(20),
  price: Joi.number().required(),
  description: Joi.string().required().max(100),
  imageUri: Joi.string(),
});

module.exports = { addProductSchema };
