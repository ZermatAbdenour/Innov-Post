const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const Transaction = require("../models/transaction")
const Report = require("../models/report")
const User = require("../models/user")
const {upload} = require("../middlewares/FilesMiddleware");

uploadFiles=upload.single('files')
const sellerValidation=async (req,res)=>{
    const {transactionId} = req.body
    const trans = await Transaction.findById(transactionId)

    if(trans.sellerCardNum!==req.user.id)
        return res.status(401).send("unauthorized")

    if(!trans){
        return res.status(404).send("transaction not found")
    }
    if(trans.status!=="hold"){
        return res.status(403).send("forbidden")
    }
    await Transaction.findOneAndUpdate({_id : transactionId}, {$set : {status : "sellerConfirmed"}})
    return res.status(200).send("status changed")
}
const buyerValidation=async (req,res)=>{
    const {transactionId} = req.body

    if(trans.buyerCardNum!==req.user.id)
        return res.status(401).send("unauthorized")

    const trans = await Transaction.findById(transactionId)
    if(!trans){
        return res.status(404).send("transaction not found")
    }
    if(trans.status!=="sellerConfirmed"){
        return res.status(403).send("forbidden")
    }
    await Transaction.findOneAndUpdate({_id : transactionId}, {$set : {status : "buyerConfirmed"}})
    return res.status(200).send("status changed")
}
const cancelTransaction=async (req,res)=>{
    const {transactionId} = req.body
    const trans = await Transaction.findById(transactionId)

    if(trans.buyerCardNum!==req.user.id && trans.sellerCardNum!==req.user.id)
        return res.status(401).send("unauthorized")

    if(!trans){
        return res.status(404).send("transaction not found")
    }
    if(trans.status!=="hold"){
        return res.status(403).send("forbidden")
    }
    await Transaction.findOneAndUpdate({_id : transactionId}, {$set : {status : "cancelled"}})
    return res.status(200).send("status changed")

}
const reportIssue=async (req,res)=>{
    const {transactionId,sellerCardNum,message} = req.body
        uploadFiles(req, res, async (err) => {
            if (err) {
                return res.status(400).send('Error uploading files: ' + err.message);
            }
            console.log("error")
            const trans = await Transaction.findById(transactionId)
        if(!trans){
            return res.status(404).send("transaction not found")
        }
        if(trans.status!=="sellerConfirmed"){
            return res.status(403).send("forbidden")
        }

            const uploadedFiles = req.files;
            if (!uploadedFiles || uploadedFiles.length === 0) {
                return res.status(400).send('No files were uploaded.');
            }
            await Transaction.findOneAndUpdate({_id : transactionId}, {$set : {status : "issued"}})

            const report = new Report({
                sellerCardNum:sellerCardNum,
                transactionId:transactionId,
                message:message,
                filePath:uploadedFiles[0].path
            })
            await report.save()
            res.status(200).send("report submited")
        });

}
const getAllTransactions = async(req,res)=>{
    const CardNum = req.user.id
    const transactions = await Transaction.find({
        $or: [
            { buyerCardNum: CardNum },
            { sellerCardNum: CardNum }
        ]
    });
    res.status(200).send(transactions)
}

const getOneTransaction = async (req,res)=>{
    const {id} = req.params
    const trans= await Transaction.findById(id)

    if(trans.buyerCardNum != req.user.id && trans.sellerCardNum != req.user.id)
        return res.status(401).send("unauthorized")
    if(!trans){
        return res.status(404).send("transaction not found")
    }
    const seller = await User.findOne({cardNum:trans.sellerCardNum}).select('-password');
    const buyer = await User.findOne({cardNum:trans.buyerCardNum}).select('-password');
    return res.status(200).json({
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
    getAllTransactions,
    getOneTransaction
};
