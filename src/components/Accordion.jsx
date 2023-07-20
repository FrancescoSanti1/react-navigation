import classNames from "classnames";
import { useState } from "react";

export default function Accordion({ items }) {
    const [expanded, setExpanded] = useState(0);

    return <div>
        {items.map((item, i) => {
            return <div key={item.id}>
                <p onClick={() => setExpanded(i)} className="hover:cursor-pointer">{item.label}</p>
                {i === expanded && <p>{item.content}</p>}
            </div >
        })}
    </div>;
}