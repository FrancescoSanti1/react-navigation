import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

export default function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    return <div>
        <Button variation={"primary"} onClick={handleClick}>Open modal</Button>
        {showModal && <Modal />}
    </div>
}