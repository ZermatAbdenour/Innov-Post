const express = require('express')
const authentication = require('../middlewares/auth')
const {sellerValidation, buyerValidation, cancelTransaction, reportIssue, getAllTransactions,
     getOneTransaction, getAllUsers
} = require("../controllers/transactions");
const validateRequest = require("../middlewares/validate-request");
const {reportSchema} = require("../schemas/transactionSchemas");


const router = express.Router()

router.route('/users').get(getAllUsers)


router.route('/sellerValidation').post(authentication,sellerValidation)
router.route('/buyerValidation').post(authentication,buyerValidation)
router.route('/cancelTransaction').post(authentication,cancelTransaction)
router.route('/reportIssue').post(validateRequest(reportSchema),authentication,reportIssue)

router.route('/').get(authentication,getAllTransactions)
router.route('/:id').get(authentication,getOneTransaction)


module.exports = router