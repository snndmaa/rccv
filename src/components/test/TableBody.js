import React from 'react'

function TableBody({ tableData, columns }) {
  return (
    <tbody>
        {tableData.map((data) => {
            return (
                <tr key={data.id} style={{
                    borderBottom: '1px solid #dddddd'
                }}>
                    {columns.map(({ accessor }) => {
                        const tData = data[accessor] ? data[accessor] : '--'
                        return <td key={accessor}style={{
                            padding: '12px 15px',
                        }}>
                            {tData}
                        </td>
                    })}
                </tr>
            )
        })}
    </tbody>
  )
}

export default TableBody