const orderItemService = require("../services/orderItem-service")

const orderItemController = {}

orderItemController.create = async (req, res, next) => {
    try {

        const orderItem = await orderItemService.create(req.input)

        res.status(200).json(orderItem)

    } catch (error) {
        next(error)
    }
}

module.exports = orderItemController