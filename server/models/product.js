const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const ENV = require('dotenv')
ENV.config()

const dbconnect = process.env.URL_DB
mongoose.connect(`${dbconnect}`, { useNewUrlParser: true })

const schema = mongoose.Schema

const ProductSchema = new schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    featured_image: {
        type: String,
        required: true
    }
})

ProductSchema.path('productName').validate(function (value, respond) {
    return mongoose
        .model('Products')
        .collection
        .countDocuments({ productName: value })
        .then(function (count) {
            if (count > 0) {
                return false
            }
        })
        .catch(function (err) {
            throw err
        })
}, 'Product already exists!!')

var Products = mongoose.model('Products', ProductSchema)

module.exports = Products