import Button from "../../../components/Button";
import OrderCard from "./OrderCard";

export default function OrderContainer() {
    return (<>

        <div className="flex gap-8 bg-gray-900 rounded-lg pr-5 pb-10">

            <div className="flex flex-col max-h-80 justify-start items-start mt-5 
            ml-5 overflow-auto scrollbar-thumb-yellow-400 scrollbar-track-yellow-100 ">
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>
            <div className="pt-10 text-white">
                <h1 >Order number : <spancl className="text-orange-500 font-bold">888</spancl></h1>
                <p>Order status : Order received</p>
                <p>Payment status : Pending payment</p>
                <p className="mt-3 ">Total price : <span className="text-orange-500 font-bold">$200</span></p>
                <div className="text-center mt-10">
                    <Button width={40} bg="green">Back</Button>
                </div>
            </div>

        </div>


    </>)
}