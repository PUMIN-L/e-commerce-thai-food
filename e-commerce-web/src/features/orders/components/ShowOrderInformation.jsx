import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import OrderCard from "./OrderCard";
import orderItemApi from "../../../apis/orderItemApi";

export default function ShowOrderInformation({ order, onClose }) {
    // console.log(order)
    const [orderItems, setOrderItems] = useState(null)

    useEffect(() => {
        const getOrderItems = async () => {
            const orderItems = await orderItemApi.getByOrderId(order.id)
            setOrderItems(orderItems.data)
        }
        getOrderItems()

    }, [order])



    // console.log('orderItems', orderItems)
    return (<>
        <div className="flex gap-8 bg-gray-900 rounded-lg pr-5 pb-10">
            <div className="flex flex-col max-h-80 justify-start items-start mt-5 
            ml-5 overflow-auto scrollbar-custom min-w-[18rem] ">
                {
                    orderItems && orderItems.map(item => <OrderCard key={item.id} information={item} />)
                }

            </div>
            <div className="pt-10 text-white">
                <h1 >Order number : <spancl className="text-orange-500 font-bold">{order.id}</spancl></h1>
                <p>Order status : {order.orderStatus}</p>
                <p>Payment status : {order.paymentStatus}</p>
                <p className="mt-3 ">Total price : <span className="text-orange-500 font-bold">${order.totalPrice}</span></p>
                <div className="text-center mt-10">
                    <Button width={40} bg="green" onClick={onClose}>Back</Button>
                </div>
            </div>

        </div>
    </>)
}