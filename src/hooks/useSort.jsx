import { useState } from "react";

export default function useSort(data, config) {

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setsortBy] = useState(null);

    const setSortColumn = (label) => {
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

    return {
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn
    }
}