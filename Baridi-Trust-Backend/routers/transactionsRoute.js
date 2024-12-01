const express = require('express')
const authentication = require('../middlewares/auth')
const {sellerValidation, buyerValidation, cancelTransaction, issueValidation, reportIssue, getAllTransactions, getOneTransaction, getAllUsers
} = require("../controllers/transactions");
const {upload} = require("../middlewares/FilesMiddleware");

const router = express.Router()

router.route('/users').get(getAllUsers)


router.route('/sellerValidation').post(authentication,sellerValidation)
router.route('/buyerValidation').post(authentication,buyerValidation)
router.route('/cancelTransaction').post(authentication,cancelTransaction)
router.route('/reportIssue').post(upload.single('files'),reportIssue)

router.route('/').get(authentication,getAllTransactions)
router.route('/:id').get(authentication,getOneTransaction)


module.exports = router