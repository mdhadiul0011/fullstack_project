require('dotenv').config()

const express = require('express')
var cors = require('cors')
const app = express()
const Router = require('./routes')
const mongoConfig = require('./config/mongoConfig')

mongoConfig()
app.use(cors())
app.use(express.json())
app.use('/', Router)



const port = process.env.PORT || 8000

app.listen(port)