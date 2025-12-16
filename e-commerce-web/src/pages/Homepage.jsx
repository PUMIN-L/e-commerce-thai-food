import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Homepage() {
    return (
        <div className=" mt-32 z-10 h-[25rem] bg-black opacity-90 flex justify-center items-center rounded-2xl">
            <Link to={"/menu"}> <Button>Order Now !!</Button></Link>
        </div>
    )
}