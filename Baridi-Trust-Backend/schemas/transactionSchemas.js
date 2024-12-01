const Joi = require('joi')

reportSchema = Joi.object(
    {
        sellerRIP: Joi.string().required().max(16).min(16),
        transactionId:Joi.string().required(),
        message: Joi.string().required().max(100),
    }
)

// transactionSchema = Joi.object(
//     {
//         sellerCardNum: Joi.string().required().max(16).min(16),
//         buyerCardNum: Joi.string().required().max(16).min(16),
//         price: Joi.number().required(),
//     }
// )

module.exports = {reportSchema}