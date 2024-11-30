const express = require('express')
const authentication = require('../middlewares/auth')
const {sellerValidation, buyerValidation, cancelTransaction, issueValidation, reportIssue} = require("../controllers/transactions");

const router = express.Router()

router.route('/sellerValidation').post(sellerValidation)
router.route('/buyerValidation').post(buyerValidation)
router.route('/cancelTransaction').post(cancelTransaction)
router.route('/reportIssue').post(reportIssue)


module.exports = router