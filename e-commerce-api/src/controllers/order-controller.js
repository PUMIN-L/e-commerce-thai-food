const orderService = require("../services/order-service")
const createError2 = require("../utils/create-error2")

const orderController = {}

orderController.create = async (req, res, next) => {
    try {
        const order = await orderService.createOrder(req.input)
        res.status(200).json(order)

    } catch (error) {
        next(error)
    }
}

orderController.getByUserId = async (req, res, next) => {
    try {
        console.log("req.user.id", req.user.id)
        console.log("req.params.id", +req.params.id)
        if (req.user.id !== +req.params.id) {
            createError2('User is invalid')(400)('user')
        }

        const orders = await orderService.findByUserId(+req.params.id)
        res.status(200).json(orders)
    } catch (error) {
        next(error)
    }
}

module.exports = orderController

// const productController = {}

// productController.createProduct = async (req, res, next) => {
// }
// productController.getAllProduct = async (req, res, next) => {
// }
// productController.updateById = async (req, res, next) => {
// productController.deleteById = async (req, res, next) => {

// module.exports = productController