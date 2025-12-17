import { Link } from "react-router-dom";
import Button from "../components/Button";
import OrderContainer from "../features/orders/components/OrderContainer";
import { useEffect, useState } from "react";
import orderApi from "../apis/orderApi";
import Spinner from "../components/Spinner";
import useOrder from "../features/orders/hook/useOrder";
import useAuth from "../hook/useAuth";


export default function SeeOrderPage() {

    const { ordersByUser } = useOrder()

    const [loading, setLoading] = useState(false)

    return (
        <>
            {loading && <Spinner />}

            {ordersByUser ? (
                <div className="mt-32 z-10 h-[25rem]opacity-90  
            flex justify-start items-center flex-col gap-2 rounded-2xl max-h-120 overflow-auto">

                    <h1 className="font-extrabold text-4xl my-5 text-blue-900">Your Order</h1>

                    <OrderContainer orders={ordersByUser} />

                </div>
            )
                :

                (
                    <div className="mt-32 z-10 h-[25rem] bg-gray-200 opacity-90  
            flex justify-center items-center flex-col rounded-2xl">
                        <div className="flex flex-col justify-center items-center">
                            <p className="mb-2">You don't have any orders yet</p>
                            <Link to={"/menu"}><Button bg="darkBlue">Check here to choose menu.</Button></Link>
                        </div>
                    </div>
                )}

        </>
    )
}