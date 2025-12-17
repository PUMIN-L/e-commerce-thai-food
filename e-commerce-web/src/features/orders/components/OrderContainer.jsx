
import ShotCutOrderCard from "./ShotcutOrderCard";


export default function OrderContainer({ orders }) {


    return (<>
        {orders?.map(item => <ShotCutOrderCard
            key={item.id}
            order={item}
        />)}
    </>)
}