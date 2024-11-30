const Joi = require('joi')

registerSchema = Joi.object(
    {
        userName: Joi.string().required().max(20),
        password: Joi.string().required().max(20),
        repeatPassword: Joi.string().required().max(20),
        email: Joi.string().email().required()
    }
)
loginSchema = Joi.object(
    {
        email:Joi.string().email().required().max(20),
        password:Joi.string().required().max(20)
    }
)

module.exports = {registerSchema,loginSchema}