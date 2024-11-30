const mongoose = require('mongoose')

const report = mongoose.Schema({
    sellerRIP:{
        type:Number,
        maxLength:20,
        required:[true,"buyer RIP is required"]
    },
    transactionId:{
        type:Number,
        maxLength:20,
        required:[true,"buyer RIP is required"]
    },
    message:{
        type:String,
        maxLength:100,
    },
    filePath:{
        type:String,
        maxLength:200,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Reports',report)