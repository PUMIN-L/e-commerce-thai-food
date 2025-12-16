import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function SeeOrderPage() {
    return (
        <>
            {!true ? (<h1 className="mt-32 z-10">cscs</h1>) : (<div className="mt-32 z-10 h-[25rem] bg-gray-200 opacity-90  
            flex justify-center items-center flex-col rounded-2xl">
                <div className="flex flex-col justify-center items-center">
                    <p className="mb-2">You don't have any orders yet</p>
                    <Link to={"/menu"}><Button bg="darkBlue">Check here to choose menu.</Button></Link>
                </div>
            </div>)}

        </>
    )
}