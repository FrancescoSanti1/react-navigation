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
        return <div onClick={() => handleSelected(option)} key={option.value} className="hover:cursor-pointer">{option.label}</div>
    })

    return <div>
        <div onClick={handleClick} className="hover:cursor-pointer">
            {value?.label || "Select..."}
        </div>
        {open && <div>{renderList}</div>}
    </div>
}