const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const Transaction = require("../models/transaction")


const sellerValidation=async (req,res)=>{
    const {transactionId} = req.body
    try{
        const trans = await Transaction.findById(transactionId)
        if(!trans){
            res.status(404).send("transaction not found")
        }
        if(trans.status!=="hold"){
            res.status(403).send("forbidden")
        }
        await Transaction.findOneAndUpdate({_id : transactionId}, {$set : {status : "sellerConfirmed"}})
        res.status(200).send("status changed")

    }catch (e) {
        res.status(500).send("Internal server error : ", e)
    }
}
const buyerValidation=async (req,res)=>{
    const {transactionId} = req.body
    try{
        const trans = await Transaction.findById(transactionId)
        if(!trans){
            res.status(404).send("transaction not found")
        }
        if(trans.status!=="sellerConfirmed"){
            res.status(403).send("forbidden")
        }
        await Transaction.findOneAndUpdate({_id : transactionId}, {$set : {status : "buyerConfirmed"}})
        res.status(200).send("status changed")

    }catch (e) {
        res.status(500).send("Internal server error : ", e)
    }
}
const cancelTransaction=async (req,res)=>{
    const {transactionId} = req.body
    try{
        const trans = await Transaction.findById(transactionId)
        if(!trans){
            res.status(404).send("transaction not found")
        }
        if(trans.status!=="hold"){
            res.status(403).send("forbidden")
        }
        await Transaction.findOneAndUpdate({_id : transactionId}, {$set : {status : "cancelled"}})
        res.status(200).send("status changed")

    }catch (e) {
        res.status(500).send("Internal server error : ", e)
    }
}
const reportIssue=async (req,res)=>{
    const {transactionId} = req.body
    try{
        const trans = await Transaction.findById(transactionId)
        if(!trans){
            res.status(404).send("transaction not found")
        }
        if(trans.status!=="sellerConfirmed"){
            res.status(403).send("forbidden")
        }
        await Transaction.findOneAndUpdate({_id : transactionId}, {$set : {status : "issued"}})
        res.status(200).send("status changed")

    }catch (e) {
        res.status(500).send("Internal server error : ", e)
    }
}
module.exports = {
    sellerValidation,
    buyerValidation,
    cancelTransaction,
    reportIssue
};
