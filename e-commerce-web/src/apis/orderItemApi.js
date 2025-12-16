
import axios from "../config/axios"

const orderItemApi = {}

orderItemApi.create = data => axios.post("/orderItem/create", data)

export default orderItemApi