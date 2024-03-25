const express = require('express');
const router = express.Router();
const NewApi = require('./api')

router.use(process.env.API_V, NewApi)


module.exports = router;