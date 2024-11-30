const mongoose = require('mongoose')

const DBConnect = async(URI)=>{
    try{
        await mongoose.connect(URI)
    }catch(err){
        console.log(err)
    }
}

module.exports = DBConnect