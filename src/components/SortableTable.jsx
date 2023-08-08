import { useState } from "react";
import Table from "./Table";

export default function SortableTable(props) {
    const { config, data } = props;

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setsortBy] = useState(null);

    const handleClick = (label) => {
        if ((sortBy && sortBy !== label) || sortOrder === null) {
            setSortOrder("asc");
            setsortBy(label);
        } else if (sortOrder === "asc") {
            setSortOrder("desc");
            setsortBy(label);
        } else if (sortOrder === "desc") {
            setSortOrder(null);
            setsortBy(null);
        }
    }

    const icons = (label, sortBy, sortOrder) => {
        if (label !== sortBy) {
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
            </svg>;
        }

        if (!sortOrder) {
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
            </svg>;
        } else if (sortOrder === "asc") {
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
            </svg>;
        } else if (sortOrder === "desc") {
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
            </svg>;
        }

    };

    const updatedConfig = config.map(col => {
        if (!col.sortValue) {
            return col;
        }

        return {
            ...col,
            header: () => (
                <th onClick={() => handleClick(col.label)} className="cursor-pointer hover:bg-gray-100">
                    <div className="flex items-center">
                        {col.label}
                        {icons(col.label, sortBy, sortOrder)}
                    </div>
                </th>
            )
        }
    });

    let sortedData = data;

    if (sortOrder && sortBy) {
        const { sortValue } = config.find(col => col.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            const reverse = sortOrder === "desc" ? -1 : 1;

            if (typeof valueA === "string") {
                return valueA.localeCompare(valueB) * reverse;
            }
            return (valueA - valueB) * reverse;
        });
    }

    return <div>
        {sortOrder} - {sortBy}
        <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
}