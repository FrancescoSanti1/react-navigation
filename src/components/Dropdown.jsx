import { useEffect, useRef, useState } from "react"
import Panel from "./Panel";

export default function Dropdown({ options, value, onChange }) {

    const [open, setOpen] = useState(false);

    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) return;

            if (!divEl.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("click", handler, true);

        return () => { document.removeEventListener("click", handler, true) }
    }, []);

    const handleClick = () => {
        setOpen(!open);
    }

    const handleSelected = (option) => {
        setOpen(false);
        onChange(option);
    }

    const renderList = options.map(option => {
        return <div onClick={() => handleSelected(option)} key={option.value} className="hover:cursor-pointer hover:bg-sky-100 rounded p-1">{option.label}</div>
    })

    return <div ref={divEl} className="w-48 relative">
        <Panel onClick={handleClick} className="hover:cursor-pointer flex justify-between items-center">
            {value?.label || "Select..."}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </Panel>
        {open && <Panel className="absolute top-full">{renderList}</Panel>}
    </div>
}