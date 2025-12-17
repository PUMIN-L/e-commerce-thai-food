import { createContext, useEffect, useState } from "react";
import orderApi from "../../../apis/orderApi";
import useAuth from "../../../hook/useAuth";

export const OrderContext = createContext()

export default function OrderContextProvider({ children }) {

    const { authUser } = useAuth()

    const [ordersByUser, setOrdersByUser] = useState(null)
    const [allOrder, setAllOrder] = useState(null)
    const [createOrder, setCreateOrder] = useState([])


    useEffect(() => {

        if (!authUser) {
            return setOrdersByUser(null)
        }

        const getOrders = async () => {
            const orders = await orderApi.getAllByUserId()
            if (orders) {
                setOrdersByUser(orders.data)
            }
        }
        getOrders()

    }, [authUser])

    const getAllOrdersByUserId = async () => {
        try {
            const orders = await orderApi.getAllByUserId()
            return orders
        } catch (error) {
            console.log(error)
        }

    }

    const value = {
        allOrder,
        setCreateOrder,
        createOrder,
        getAllOrdersByUserId,
        ordersByUser,
        setOrdersByUser
    }

    return <OrderContext.Provider value={value}>
        {children}
    </OrderContext.Provider>


}