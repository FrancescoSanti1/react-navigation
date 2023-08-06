export default function Table({ data, config }) {
    return <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {config.map(th => {
                    return <th key={th.label}>{th.label}</th>
                })}
            </tr>
        </thead>
        <tbody>
            {data.map(fruit => {
                return <tr key={fruit.name} className="border-b">
                    {config.map(col => {
                        return <td key={col.label} className="p-3">{col.render(fruit)}</td>
                    })}
                </tr>
            })}
        </tbody>
    </table>
}