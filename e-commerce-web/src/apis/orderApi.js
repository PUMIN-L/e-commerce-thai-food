import axios from "../config/axios"
const orderApi = {}

orderApi.create = body => axios.post('/order/create', body)
orderApi.getAllByUserId = () => axios.get('/order/getByUserId')

export default orderApi