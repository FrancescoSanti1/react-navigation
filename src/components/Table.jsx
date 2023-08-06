export default function Table({ data }) {
    return <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                <th>Fruit</th>
                <th>Color</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            {data.map(fruit => {
                return <tr key={fruit.name} className="border-b">
                    <td className="p-3">{fruit.name}</td>
                    <td className="p-3">
                        <div className={`p-3 m-2 ${fruit.color}`}></div>
                    </td>
                    <td className="p-3">{fruit.score}</td>
                </tr>
            })}
        </tbody>
    </table>
}