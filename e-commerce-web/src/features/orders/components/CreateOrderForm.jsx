import { toast } from "react-toastify";
import Button from "../../../components/Button";
import useOrder from "../hook/useOrder";
import ItemOrderCard from "./itemOrderCard";
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import useAuth from "../../../hook/useAuth";
import orderApi from "../../../apis/orderApi";
import orderItemApi from "../../../apis/orderItemApi";



export default function CreateOrderForm() {

    const navigate = useNavigate()

    const { authUser } = useAuth()
    const { createOrder, setCreateOrder } = useOrder()
    // "PROCESSING" = "Order received"
    // "PENDING" = "Pending payment"
    const orderInit = {
        userId: authUser?.id,
        totalPrice: 0,
        orderStatus: 'PROCESSING',
        paymentStatus: 'PENDING',
    }

    const [order, setOrder] = useState(orderInit)
    const [paymentMethod, setPaymentMethod] = useState(null)


    useEffect(() => {
        const newTotalPrice = () => {

            let totalPrice = 0
            createOrder.map(item => {
                totalPrice += (item.price * item.amount)
            })
            setOrder({ ...order, "totalPrice": totalPrice })
        }

        newTotalPrice()
    }, [createOrder])

    const handleClickOrderNow = async () => {
        try {

            if (!paymentMethod) {
                return toast.warn('Please select a payment method')
            }
            const resCreateOrder = await orderApi.create(order)

            if (resCreateOrder) {
                const orderItems = createOrder.reduce((itemOrder, item) => {
                    const formObject = {
                        "orderId": resCreateOrder.data.id,
                        "productId": item.id,
                        "amount": item.amount,
                        "price": item.price * item.amount
                    }
                    return [...itemOrder, formObject]
                }, [])

                for (const item in orderItems) {
                    await orderItemApi.create(orderItems[item])
                }
            }
            toast.success('Created Order')
            setCreateOrder([])
            navigate('/menu') //เปลี่ยนไปหน้า ดูรายการ order
        } catch (error) {
            console.log(error)
        }

    }

    const handleClickCancleOrder = () => {
        setCreateOrder([])
        toast.success('Deleted Order')
    }

    return (<>{
        createOrder[0] ? (<div className="flex h-[20rem]   shadow-lg  rounded-lg">
            <div className="  overflow-auto px-3 ">
                {createOrder.map(e => {
                    return <ItemOrderCard information={e} key={e.id} />
                })}


            </div>

            <div className=" overflow-auto px-10 ">

                <div className="flex gap-2">
                    <p className="font-bold">Totle Prict</p>
                    <p>${order.totalPrice}</p>
                </div>
                <div className="mt-2">
                    <p className="font-bold">Choose a payment method</p>
                    <label>
                        <input type="radio" name="payment" value="bank"
                            onChange={e => setPaymentMethod(e.target.value)}
                        />
                        Transfer from a bank account
                    </label>
                    <br />

                    <label>
                        <input type="radio" name="payment" value="cash"
                            onChange={e => setPaymentMethod(e.target.value)}
                        />
                        Pay with cash on delivery
                    </label>
                    <br />

                </div>
                <div className="flex gap-5 mt-5 justify-center">
                    <Button bg="green" onClick={handleClickOrderNow} >Order now</Button>
                    <Button bg="red" onClick={handleClickCancleOrder} >Cancle order</Button>
                </div>
            </div>
        </div>) : (<div className="flex flex-col justify-center items-center">
            <p className="mb-2">You haven't added any menu yet</p>
            <Link to={"/menu"}><Button>Check here to choose menu.</Button></Link>
        </div>)
    }
    </>)
}