const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const userModel = require('../models/user')
const transactionModel = require('../models/transaction')

const redirect = async(req,res)=>{
    
    newTransaction = {
        sellerRIP : req.body.sellerRIP,
        buyerRIP : req.body.buyerRIP,
        price : req.body.price,
        status : 'hold'
    }
    const transaction = await transactionModel.create(newTransaction)
    const redirectUrl = process.env.REDIRECT_URL + `?rip=${req.body.RIP}&transactionId=${transaction._id}`
    return res.redirect(redirectUrl)
}
const login = async(req,res)=>{
    const body = req.body
    const transaction = await transactionModel.findOne({_id:body.transactionId})
    if(!transaction)
        return res.status(400).json({result:'transaction not found'})

    isSeller = transaction.sellerRIP === body.RIP

    user = null
    if(isSeller){
        user = await userModel.findOne({RIP:body.RIP})
        if(!user)
                return res.status(400).json({result:'seller not found'})
    }
    else{
        user = await userModel.findOne({RIP:body.RIP})
        if(!user)
            return res.status(400).json({result:'buyer not found'})
    }

    if(body.password !== user.password)
        return res.status(400).json({result:'password is wrong'})
    console.log(user)
    

    const token = jwt.sign({
        id:user.RIP,
        isSeller:isSeller
    },process.env.JWT_SECRET,{expiresIn:'7d'})

    return res.status(200).json({token:token})
}


const createUser = async (req,res)=>{
    const body = req.body
    const existedUser = await userModel.findOne({RIP:body.RIP})
    if(existedUser)
        return res.status(400).json({result:`user with RIP ${body.RIP} already exist`})

    const user = await userModel.create(body)
    return res.status(200).json(user)
}

module.exports = {redirect,login,createUser};
