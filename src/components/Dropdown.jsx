import { useState } from "react"

export default function Dropdown({ options, value, onChange }) {

    const [open, setOpen] = useState(false);

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

    return <div className="w-48 relative">
        <div onClick={handleClick} className="hover:cursor-pointer flex justify-between items-center border rounded p-3 shoadow bg-white w-full">
            {value?.label || "Select..."}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
        {open && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderList}</div>}
    </div>
}