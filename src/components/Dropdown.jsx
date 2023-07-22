import { useState } from "react"

export default function Dropdown({ options }) {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    const renderList = options.map(option => {
        return <div key={option.value} className="hover:cursor-pointer">{option.label}</div>
    })

    return <div>
        <div onClick={handleClick} className="hover:cursor-pointer">Select...</div>
        {open && <div>{renderList}</div>}
    </div>
}