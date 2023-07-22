import classNames from "classnames";
import { useState } from "react";

export default function Accordion({ items }) {
    const [expanded, setExpanded] = useState(0);

    return <div>
        {items.map((item, i) => {

            const isExpanded = expanded === i;
            const icon = <span>{isExpanded
                ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            }</span>

            return <div key={item.id}>
                <p onClick={() => setExpanded(i)} className="hover:cursor-pointer flex">{item.label} {icon}</p>
                {isExpanded && <p>{item.content}</p>}
            </div >
        })}
    </div>;
}