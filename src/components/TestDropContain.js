import React from 'react'
import { useDrop } from 'react-dnd';

function TestDropContain({onDrop}) {
const [{ isOver }, dropRef] = useDrop({
    accept: 'item',
    drop: (item) => {
        onDrop(item.name);
    },
    collect: (monitor) => ({
        isOver: monitor.isOver(),
    }),
    });

    return (
    <div
        ref={dropRef}
        style={{
        padding: '16px',
        border: '2px dashed #aaa',
        backgroundColor: isOver ? '#f0f8ff' : 'transparent',
        }}
    >
        {isOver ? 'Drop here!' : 'Drag items here'}
    </div>
    );
};

export default TestDropContain