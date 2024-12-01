const mongoose = require('mongoose')

const transaction = mongoose.Schema({
    sellerCardNum:{
        type:String,
        maxLength:16,
        required:[true,"buyer CardNum is required"]
    },
    buyerCardNum:{
        type:String,
        maxLength:16,
        required:[true,"seller CardNum is required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"]
    },
    status:{
        type:String,
        default:"hold",
        enum:["hold","sellerConfirmed","buyerConfirmed","cancelled","issued"]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Transactions',transaction)