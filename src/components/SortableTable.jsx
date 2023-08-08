import { useState } from "react";
import Table from "./Table";

export default function SortableTable(props) {
    const { config, data } = props;

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setsortBy] = useState(null);

    const handleClick = (label) => {
        if (sortOrder === null) {
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

    const updatedConfig = config.map(col => {
        if (!col.sortValue) {
            return col;
        }

        return {
            ...col,
            header: () => <th onClick={() => handleClick(col.label)}>{col.label} (sortable)</th>
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