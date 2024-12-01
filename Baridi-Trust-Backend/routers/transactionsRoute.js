const express = require('express')
const authentication = require('../middlewares/auth')
const {sellerValidation, buyerValidation, cancelTransaction, reportIssue, getAllBuyerTransactions,
    getAllSellerTransactions, getOneTransaction, getAllUsers
} = require("../controllers/transactions");


const router = express.Router()

router.route('/users').get(getAllUsers)


router.route('/sellerValidation').post(sellerValidation)
router.route('/buyerValidation').post(buyerValidation)
router.route('/cancelTransaction').post(cancelTransaction)
router.route('/reportIssue').post(reportIssue)

router.route('/buyer/all').get(getAllBuyerTransactions)
router.route('/seller/all').get(getAllSellerTransactions)
router.route('/transactionDetails').get(getOneTransaction)


module.exports = router