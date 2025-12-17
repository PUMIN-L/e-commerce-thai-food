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

        if (!req.user.id && req.user.roldId !== 2) {
            createError2('User is invalid')(400)('user')
        }

        const orders = await orderService.findByUserId(+req.user.id)

        res.status(200).json(orders)
    } catch (error) {
        next(error)
    }
}

orderController.getById = async (req, res, next) => {
    try {
        const order = await orderService.findById(+req.params.orderId)

        if (req.user.id !== order.userId && req.user.roleId !== 2) {
            createError2('UnAuthenticate')(400)('user')
        }

        res.status(200).json(order)

    } catch (error) {
        next(error)
    }
}

orderController.getAll = async (req, res, next) => {
    try {

        if (req.user.roleId !== 2) {
            createError2('UnAuthenticate')(400)('user')
        }

        const allOrders = await orderService.getAll()

        res.status(200).json(allOrders)

    } catch (error) {
        next(error)
    }
}

module.exports = orderController

