const model = require('../models/product')

class ProductController {
    static getItems(req, res) {
        model
            .find()
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    static findOne(req, res) {
        const { id } = req.params
        model
            .findOne({
                _id: id
            })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

module.exports = ProductController