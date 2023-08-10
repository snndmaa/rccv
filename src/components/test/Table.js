import React, { useState } from 'react'

import data from '../../store/data'
import TableHead from './TableHead'
import TableBody from './TableBody'
import useDragger from '../../hooks/useDragger'
import { Resizable } from 're-resizable'


function Table({ lbox }) {
    const [tableData, setTableData] = useState(data)
    const [dimensions, setDimensions] = useState({ width: '46%', height: '45%' })

    const columns = [
        { label: "Full Name", accessor: "full_name" },
        { label: "Email", accessor: "email" },
        { label: "Gender", accessor: "gender" },
        { label: "Age", accessor: "age" },
    ]

    useDragger(lbox.id)

    const handleSorting = (sortField, sortOrder) => {
        if (sortField){
            const sorted = [...tableData].sort((a, b) => {
                if (a[sortField] === null) return 1
                if (a[sortField] === null && b[sortField] === null) return 0

                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
                        numeric: true,
                    }) * (sortOrder === 'asc' ? 1 : -1)
                )
            })
            setTableData(sorted)
        }
    }

    return (
        <Resizable
         id={lbox.id}
         className='absolute overflow-y-scroll overflow-x-auto'
         style={{border: "3px solid black" }}
         size={{ width: dimensions.width, height: dimensions.height }}
         onResizeStop={(e, direction, ref, d) => {
            setDimensions({
               width: dimensions.width + d.width, height: dimensions.height + d.height,});
         }}>
            <table style={{
                userSelect: 'none',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
                borderCollapse: 'collapse',
                margin: '25px 0',
                fontFamily: 'sans-serif',
                fontSize: '0.9em',
                zIndex:50,
                width: '100%',
                minWidth: 'fit-content',
            }}>
                <caption>
                    Agent Data Title
                </caption>
                <TableHead {...{columns, handleSorting}}/>
                <TableBody {...{columns, tableData}} />
            </table>
        </Resizable>
    )
}

export default Table