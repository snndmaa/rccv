import React, {useState} from 'react'
import ContextMenu from '../components/ContextMenu'

function Dashboard() {
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 })

  const handleContextMenu = (e) => {
    e.preventDefault();
    setShowContextMenu(true);
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
  }

  const handleCloseContextMenu = () => {
    setShowContextMenu(false);
  };

  return (
    <div className='border-2 border-black border-solid w-full h-screen'>
        {/* Top Container */}
        <div className="border-2 border-black border-purple-500 w-full h-1/6">

        </div>

        {/* Bottom Container */}
        <div onContextMenu={handleContextMenu} className="border-2 border-black border-green-500 w-full h-5/6 bg-gray-100" onClick={handleCloseContextMenu}>
            {showContextMenu && (
                <ContextMenu
                    x={contextMenuPosition.x}
                    y={contextMenuPosition.y}
                />
            )}
        </div>
    </div>
  )
}

export default Dashboard