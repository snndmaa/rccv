import React, {useState} from 'react'

import ListBox from '../menu/ListBox'


function TableHead({ columns, handleSorting }) {
    const [sortField, setSortField] = useState('')
    const [order, setOrder] = useState('asc')
    
    const [contextMenu, setContextMenu] = useState(false)

    const handleSortingChange = (accessor) => {
        const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc"
        setSortField(accessor)
        setOrder(sortOrder)
        handleSorting(accessor, sortOrder)
    }

    return (
        <>
        <thead>
            <tr style={{
                backgroundColor: '#009879',
                color: '#ffffff',
                textAlign: 'left',
            }}>
                {
                    columns.map(({ label, accessor }) => {
                        return (
                            <th key={accessor} onClick={()=>handleSortingChange(accessor)} style={{
                                padding: '12px 15px',
                            }}>
                                {label}
                            </th>
                        )
                    })
                }
            </tr>
        </thead>
        
        </>
    )
}

export default TableHead