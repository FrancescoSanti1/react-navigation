import { Fragment } from "react"

export default function Table({ data, config, keyFn }) {
    return <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {config.map(th => {
                    if (th.header) {
                        return <Fragment key={th.label}>{th.header()}</Fragment>;
                    }
                    return <th key={th.label}>{th.label}</th>
                })}
            </tr>
        </thead>
        <tbody>
            {data.map(row => {
                return <tr key={keyFn(row)} className="border-b">
                    {config.map(col => {
                        return <td key={col.label} className="p-3">{col.render(row)}</td>
                    })}
                </tr>
            })}
        </tbody>
    </table>
}