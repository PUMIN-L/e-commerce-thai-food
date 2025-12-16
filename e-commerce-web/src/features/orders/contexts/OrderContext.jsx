import { createContext, useState } from "react";

export const OrderContext = createContext()

export default function OrderContextProvider({ children }) {

    const [allOrder, setAllOrder] = useState(null)
    const [createOrder, setCreateOrder] = useState([])


    const value = {
        allOrder,
        setCreateOrder,
        createOrder
    }

    return <OrderContext.Provider value={value}>
        {children}
    </OrderContext.Provider>


}