const mongoose = require('mongoose')

const report = mongoose.Schema({
    sellerCardNum:{
        type:Number,
        maxLength:16,
        required:[true,"seller CardNum is required"]
    },
    transactionId:{
        type:String,
        maxLength:100,
        required:[true,"transctionid  is required"]
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