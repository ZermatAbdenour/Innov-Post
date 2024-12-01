const Joi = require('joi')

reportSchema = Joi.object(
    {
        sellerRIP: Joi.string().required().max(16).min(16),
        transactionId:Joi.string().required(),
        message: Joi.string().required().max(100),
    }
)


module.exports = {reportSchema}