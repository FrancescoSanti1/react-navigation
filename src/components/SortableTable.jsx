import useSort from "../hooks/useSort";
import Table from "./Table";

export default function SortableTable(props) {
    const { config, data } = props;
    const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config);

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
                <th onClick={() => setSortColumn(col.label)}>
                    <div className="flex items-center cursor-pointer hover:bg-gray-100 p-1 rounded">
                        {col.label}
                        {icons(col.label, sortBy, sortOrder)}
                    </div>
                </th>
            )
        }
    });

    return <Table {...props} config={updatedConfig} data={sortedData} />
}