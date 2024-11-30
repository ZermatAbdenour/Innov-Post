const mongoose = require('mongoose')

const transaction = mongoose.Schema({
    sellerRIP:{
        type:Number,
        maxLength:20,
        required:[true,"buyer RIP is required"]
    },
    buyerRIP:{
        type:Number,
        maxLength:20,
        required:[true,"seller RIP is required"]
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