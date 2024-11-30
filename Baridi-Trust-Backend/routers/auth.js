const express = require('express')
const authentication = require('../middlewares/auth')
const {redirect,login,createUser} = require('../controllers/user')
const validateRequest = require('../middlewares/validate-request')
const {redirectSchema,createUserSchema,loginSchema} = require('../schemas/userSchemas')

const router = express.Router()

router.post('/redirect',validateRequest(redirectSchema),redirect)
router.post('/login',validateRequest(loginSchema),login)
router.post('/register',validateRequest(createUserSchema),createUser)

module.exports = router