const Joi = require('joi')

redirectSchema = Joi.object(
    {
        sellerCardNum: Joi.string().required().max(16).min(16),
        buyerCardNum: Joi.string().required().max(16).min(16),
        price: Joi.number().required(),
    }
)
loginSchema = Joi.object(
    {
        cardNum:Joi.string().required().max(16).min(16),
        transactionId:Joi.string().required(),
        ccv2:Joi.number().required(),
        expirationDate:Joi.date().required(),
        fullName:Joi.string().required()
    }
)
createUserSchema = Joi.object(
    {
        cardNum:Joi.string().required().max(16).min(16),
        ccv2:Joi.number().required(),
        expirationDate:Joi.date().required(),
        fullName:Joi.string().required(),
        sold:Joi.number().required(),
    }
)

module.exports = {redirectSchema,createUserSchema,loginSchema}