const mongoose = require('mongoose')

const user = mongoose.Schema({
    RIP:{
        type:Number,
        maxLength:20,
        required:[true,"RIP is required"]
    },
    sold:{
        type:Number,
        required:[true,"sold is required"]
    },
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})


module.exports = mongoose.model('Users',user) 