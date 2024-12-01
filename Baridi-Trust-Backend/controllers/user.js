const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const userModel = require('../models/user')
const transactionModel = require('../models/transaction')
const user = require('../models/user')

const redirect = async(req,res)=>{
    
    newTransaction = {
        sellerCardNum : req.body.sellerCardNum,
        buyerCardNum : req.body.buyerCardNum,
        price : req.body.price,
        status : 'hold'
    }
    const transaction = await transactionModel.create(newTransaction)
    const redirectUrl = process.env.REDIRECT_URL + `?CardNum=${req.body.cardNum}&transactionId=${transaction._id}`
    return res.redirect(redirectUrl)
}
const login = async(req,res)=>{
    const body = req.body
    const transaction = await transactionModel.findOne({_id:body.transactionId})
    if(!transaction)
        return res.status(400).json({result:'transaction not found'})

    isSeller = transaction.sellerCardNum === body.cardNum

    let user = null
    if(isSeller){
        user = await userModel.findOne({cardNum:body.cardNum})
        if(!user)
                return res.status(400).json({result:'seller not found'})
    }
    else{
        user = await userModel.findOne({cardNum:body.cardNum})
        if(!user)
            return res.status(400).json({result:'buyer not found'})
    }

    if(body.ccv2 !== user.ccv2 || body.fullName !== user.fullName||Date(body.expirationDate) != Date(user.expirationDate))
        return res.status(401).json({result:'informations are wrong'})
    

    const token = jwt.sign({
        id:user.CardNum,
        isSeller:isSeller
    },process.env.JWT_SECRET,{expiresIn:'7d'})

    return res.status(200).json({token:token})
}


const createUser = async (req,res)=>{
    const body = req.body
    const existedUser = await userModel.findOne({cardNum:body.CardNum})
    if(existedUser)
        return res.status(400).json({result:`user with CardNum ${body.cardNum} already exist`})

    const user = await userModel.create(body)
    return res.status(200).json(user)
}

module.exports = {redirect,login,createUser};
