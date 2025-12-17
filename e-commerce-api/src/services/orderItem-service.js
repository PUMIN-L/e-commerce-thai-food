const prisma = require("../models/prisma")



const orderItemService = {}

orderItemService.create = data => prisma.order_items.create({ data })
orderItemService.getByOrderId = orderId => prisma.order_items.findMany({ where: { orderId: orderId } })

module.exports = orderItemService