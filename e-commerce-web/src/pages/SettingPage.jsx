import { useState } from "react"
import Modal from "../components/Modal"
import AddMenuForm from "../features/products/components/AddMenuForm"
import Button from "../components/Button"
import DeleteMenuForm from "../features/products/components/DeleteMenuForm"
import EditMenuContainer from "../features/products/components/EditMenuContainer"



export default function Setting() {

    const [openAddMenu, setOpenAddMenu] = useState(false)
    const [openDeleteMenu, setOpenDeleteMenu] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)

    return <>

        <div className="mt-36 z-10 h-[30rem] bg-black opacity-90 flex justify-center items-center flex-col gap-5 rounded-2xl">

            <div>
                <Button
                    onClick={() => setOpenAddMenu(prev => !prev)}
                    bg="green"
                >
                    Add New Menu +
                </Button>
                <Modal
                    onClose={() => setOpenAddMenu(false)}
                    open={openAddMenu}
                    title="Add New Menu"
                >
                    <AddMenuForm onSuccess={() => setOpenAddMenu(false)} />
                </Modal>
            </div>



            <div>
                <Button
                    onClick={() => setOpenEdit(prev => !prev)}
                >
                    Edit Menu
                </Button>
                <Modal
                    onClose={() => setOpenEdit(false)}
                    open={openEdit}
                    title="Edit Menu"
                >
                    <EditMenuContainer clossModal={() => setOpenEdit(false)} />
                </Modal>
            </div>

            <div>
                <Button
                    onClick={() => setOpenDeleteMenu(prev => !prev)}
                    bg="red"
                >
                    Delete Menu -
                </Button>
                <Modal
                    onClose={() => setOpenDeleteMenu(false)}
                    open={openDeleteMenu}
                    title="Delete Menu"
                >
                    <DeleteMenuForm onSuccess={() => setOpenDeleteMenu(false)} />
                </Modal>
            </div>

        </div>




    </>
}