import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

export default function SeeAllOrder() {

    const [openAllOrder, setOpenAllOrder] = useState(false)

    return (<>
        <Button
            onClick={() => setOpenAllOrder(true)}
        >
            See your order
        </Button>
        <Modal
            open={openAllOrder}
            onClose={() => setOpenAllOrder(false)}
        >
        </Modal>
    </>)
}