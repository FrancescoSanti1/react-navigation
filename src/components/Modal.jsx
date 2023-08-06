import { useEffect } from "react";
import { createPortal } from "react-dom"

export default function Modal({ onClose, children, actions }) {

    useEffect(() => {
        document.body.classList.add("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        }
    }, []);

    return createPortal(
        <div>
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="action-bar flex justify-end">{actions}</div>
                </div>
            </div>
        </div>,
        document.querySelector(".modal-container"));
}