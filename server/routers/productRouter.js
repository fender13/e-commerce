const router = require('express').Router()
const ENV = require('dotenv')
ENV.config()
const jwt = require('jsonwebtoken')
const modelProduct = require('../models/product')
const controller = require('../controllers/productController')
const gcsMiddlewares = require('../middlewares/google-cloud-storage')
const Multer = require('multer')

const multer = Multer({
    storage: Multer.MemoryStorage,
    limits: {
        fileSize: 10 * 1024 * 1024, // Maximum file size is 10MB
    }
})

router.post('/addnewproduct', multer.single('image'), gcsMiddlewares.sendUploadToGCS, (req, res, next) => {
    const { productName, productPrice, productDescription } = req.body

    let url = ''
    if (req.file && req.file.gcsUrl) {
        url = req.file.gcsUrl
    } 
    modelProduct.create({
        productName: productName,
        productPrice: productPrice,
        productDescription: productDescription,
        featured_image: url
    })
    .then(function(product) {
        res.status(201).json(product)
    })
    .catch(function(e) {
        res.status(500).json({
            message: e.message
        })
    })
})

router.get('/', controller.getItems)

router.get('/:id', controller.findOne)

module.exports = router