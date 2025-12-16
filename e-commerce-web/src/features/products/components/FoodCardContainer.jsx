import { useState } from "react"
import FoodCard from "../../../components/FoodCard"
import Modal from "../../../components/Modal"
import useProduct from "../hook/useProduct"
import AddOrder from "../../orders/components/AddOrder"


export default function FoodCardContainer() {

    const { allProduct } = useProduct()
    const [chooseMenu, setChooseMenu] = useState(null)

    return (
        <>
            <main className=" overflow-auto  w-[52rem] h-full  bg-gray-100 rounded-2xl ">

                <div className="space-y-4 mt-10 flex justify-center gap-2 flex-wrap ">
                    {allProduct?.map(e => {
                        if (e.id !== 0) {
                            return <FoodCard
                                key={e.id}
                                src={e.imageUrl}
                                name={e.name}
                                price={e.price}
                                id={e.id}
                                onClick={() => setChooseMenu(e)}

                            />
                        }
                    })}
                </div>

                <Modal
                    open={!!chooseMenu}
                    onClose={() => setChooseMenu(false)}
                    title={"Add order"}
                >
                    <AddOrder
                        e={chooseMenu}
                        onClose={() => setChooseMenu(false)}
                    />
                </Modal>


            </main>
        </>
    )
}