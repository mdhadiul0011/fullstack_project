const express = require('express')
const reg = express()
const RegController = require('../../controller/regController')
const secure_api = require('../../middleware/secure_api')
const otpController = require('../../controller/otpController')
const Login = require('../../controller/loginController')
const tokenController = require('../../controller/tokenController')
const resendTokenController = require('../../controller/resendtokencontoller')

reg.post('/reg', RegController)
reg.post('/otpverify', otpController)
reg.post('/tokenverify', tokenController)
reg.post('/resendtokenverify', resendTokenController)
reg.post('/login', Login)


module.exports = reg