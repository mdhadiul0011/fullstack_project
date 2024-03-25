const express = require('express')
const api = express();
const Reg = require('./auth')

api.use('/auth', Reg)


module.exports = api