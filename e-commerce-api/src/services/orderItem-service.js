const prisma = require("../models/prisma")



const orderItemService = {}

orderItemService.create = data => prisma.order_items.create({ data })

module.exports = orderItemService