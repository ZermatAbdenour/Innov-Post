const Joi = require('joi')

redirectSchema = Joi.object(
    {
        sellerRIP: Joi.string().required().max(20).min(20),
        buyerRIP: Joi.string().required().max(20).min(20),
        price: Joi.number().required(),
    }
)
loginSchema = Joi.object(
    {
        RIP:Joi.string().required().max(20).min(20),
        transactionId:Joi.string().required(),
        password:Joi.string().required()
    }
)
createUserSchema = Joi.object(
    {
        RIP:Joi.string().required().max(20).min(20),
        sold:Joi.number().required(),
        name:Joi.string().required(),
        password:Joi.string().required(),
    }
)

module.exports = {redirectSchema,createUserSchema,loginSchema}