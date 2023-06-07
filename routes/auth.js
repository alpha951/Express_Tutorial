
const express = require('express')
const router = express.Router()

const authenticate = require('../controllers/authController')

router.post('/', authenticate())

module.exports = router