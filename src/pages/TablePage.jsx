import Table from "../components/Table";

export default function TablePage() {

    const data = [
        { name: "Orange", color: "bg-orange-300", score: 5 },
        { name: "Apple", color: "bg-red-500", score: 3 },
        { name: "Banana", color: "bg-yellow-500", score: 1 },
        { name: "Lime", color: "bg-green-300", score: 4 },
    ];

    return <Table data={data} />
}