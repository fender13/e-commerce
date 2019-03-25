const router = require('express').Router()
const controller = require('../controllers/userController')
const authentication = require('../middlewares/authentication')

const jwt = require('jsonwebtoken')

const ENV = require('dotenv')
ENV.config()

router.post('/register', controller.userRegister)

router.post('/login', controller.userLogin)

router.get('/verify', authentication, (req, res) => {
    let decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET)
    res.status(200).json({
        message: 'User is verified',
        role: decoded.role
    })
})

module.exports = router