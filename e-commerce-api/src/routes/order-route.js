const express = require('express')
const authenticate = require('../middlewares/authenticate')
const orderController = require('../controllers/order-controller')
const { createOrderValidator } = require('../middlewares/validator')


const orderRouter = express.Router()

orderRouter.post('/create', authenticate, createOrderValidator, orderController.create)
orderRouter.get('/getAll', authenticate)
orderRouter.get('/getById/:id', authenticate, orderController.getByUserId)
// orderRouter.patch('/updateOrder', authenticate)
// orderRouter.delete('/deleteById', authenticate)


module.exports = orderRouter



