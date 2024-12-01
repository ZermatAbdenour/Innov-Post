const mongoose = require('mongoose')

const user = mongoose.Schema({
    cardNum:{
        type:String,
        maxLength:16,
        required:[true,"RIP is required"]
    },
    sold:{
        type:Number,
        required:[true,"sold is required"]
    },
    fullName:{
        type:String,
        required:[true,"fullname is required"]
    },
    ccv2:{
        type:Number,
        required:[true,"ccv2 is required"]
    },
    expirationDate:{
        type:Date,
        required:[true,"experation date is required"]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})


module.exports = mongoose.model('Users',user) 