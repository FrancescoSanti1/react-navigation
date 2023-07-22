import classNames from "classnames";
import { useState } from "react";

export default function Accordion({ items }) {
    const [expanded, setExpanded] = useState(-1);

    const handleClick = (index) => {
        if (expanded === index) {
            setExpanded(-1);
        } else {
            setExpanded(index);
        }
    }

    return <div className="border-x border-t rounded">
        {items.map((item, i) => {

            const isExpanded = expanded === i;
            const icon = <span>{isExpanded
                ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            }</span>

            return <div key={item.id}>
                <p onClick={() => handleClick(i)} className="hover:cursor-pointer flex p-3 bg-gray-50 border-b justify-between items-center">{item.label} {icon}</p>
                {isExpanded && <p className="border-b p-5">{item.content}</p>}
            </div >
        })}
    </div>;
}