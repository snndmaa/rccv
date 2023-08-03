import { useDrag } from 'react-dnd';

function TestDragItem({name}) {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'item',
        item: { name },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });
    
      return (
        <div
          ref={dragRef}
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: '#f0f0f0',
          }}
        >
          {name}
        </div>
      );
    };

export default TestDragItem