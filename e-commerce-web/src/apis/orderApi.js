import axios from "../config/axios"
const orderApi = {}

orderApi.create = body => axios.post('/order/create', body)

export default orderApi