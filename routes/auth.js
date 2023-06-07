
const express = require('express')
const router = express.Router()

const authenticate = require('../controllers/authController')

/* `router.post('/', authenticate)` is defining a route for a POST request to the root URL ('/') of the application. When a POST request is made to this URL, the `authenticate` function from the
`authController` module will be called to handle the request. */

router.post('/', authenticate)

module.exports = router