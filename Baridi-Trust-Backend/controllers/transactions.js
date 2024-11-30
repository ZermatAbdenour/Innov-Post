const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const Transaction = require("../models/transaction")
const Report = require("../models/report")
const User = require("../models/user")
const {upload} = require("../middlewares/FilesMiddleware");

const uploadFiles = upload.any();
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
    console.log(req.body)
    const {transactionId,sellerRIP,message} = req.body
    console.log(req.body)
    try{
        uploadFiles(req, res, async (err) => {
            if (err) {
                return res.status(400).send('Error uploading files: ' + err.message);
            }
        const trans = await Transaction.findById(transactionId)
        if(!trans){
            res.status(404).send("transaction not found")
        }
        if(trans.status!=="sellerConfirmed"){
            res.status(403).send("forbidden")
        }

            const uploadedFiles = req.files;
            if (!uploadedFiles || uploadedFiles.length === 0) {
                return res.status(400).send('No files were uploaded.');
            }
            await Transaction.findOneAndUpdate({_id : transactionId}, {$set : {status : "issued"}})

            const report = new Report({
                sellerRIP:sellerRIP,
                transactionId:transactionId,
                message:message,
                filePath:uploadedFiles[0].path
            })
            await report.save()
            res.status(200).send("report submited")
        });

    }catch (e) {
        res.status(500).send("Internal server error : ", e)
    }
}
const getAllBuyerTransactions = async (req,res)=>{
    const {buyerRIP} = req.body
    try{
        const transactions= await Transaction.find({ buyerRIP : buyerRIP })
        res.status(200).send(transactions)

    }catch (e) {
        res.status(500).send("Internal server error : ", e)

    }
}
const getAllSellerTransactions = async (req,res)=>{
    const {sellerRIP} = req.body
    try{
        const transactions= await Transaction.find({ sellerRIP : sellerRIP })
        res.status(200).send(transactions)

    }catch (e) {
        res.status(500).send("Internal server error : ", e)
    }
}
const getOneTransaction = async (req,res)=>{
    const {transId} = req.params
    console.log(transId)
    const trans= await Transaction.findById(transId)
    if(!trans){
        res.status(404).send("transaction not found")
    }
    const seller = await User.findOne({RIP:trans.sellerRIP})
    const buyer = await User.findOne({RIP:trans.buyerRIP})
    res.status(200).json({
        transaction: trans,
        seller: seller,
        buyer: buyer
    });
}
const getAllUsers = async (req,res)=>{
    const users = await User.find()
    res.status(200).json(users);
}
module.exports = {
    getAllUsers,
    sellerValidation,
    buyerValidation,
    cancelTransaction,
    reportIssue,
    getAllSellerTransactions,
    getAllBuyerTransactions,
    getOneTransaction
};
