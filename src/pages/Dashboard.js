import React, {useState} from 'react'
import { connect } from 'react-redux'

import dashbg from '../assets/images/dashbg.png'
import ContextMenu from '../components/menu/ContextMenu'
import { setObjects } from '../actions/object/objectActions'
import ListBoxPopup from '../components/popup/ListBoxPopup'
import ListBox from '../components/draggable/ListBox'
import Table from '../components/test/Table'
import useDragger from '../hooks/useDragger'


function Dashboard({ objects, users }) {
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 })

  const handleContextMenu = (e) => {
    e.preventDefault();
    setShowContextMenu(true);
    setContextMenuPosition({ x: e.clientX, y: e.clientY })
  }

  const handleCloseContextMenu = () => {
    setShowContextMenu(false)
  }


  return (
    <div className='border-2 border-black border-solid w-full h-screen'>
        {/* Top Container */}
        {/* <div className="border-2 border-black border-purple-500 w-full h-1/6">

        </div> */}

        {/* Bottom Container */}
        <div onContextMenu={handleContextMenu} style={{backgroundImage: `url(${dashbg})`}} className="w-full h-full bg-gray-100" onClick={handleCloseContextMenu}>
            {showContextMenu && (
                <ContextMenu
                    x={contextMenuPosition.x}
                    y={contextMenuPosition.y}
                />
            )}

            {objects.displayPopup[1] === 'ListBox'
             ? <ListBoxPopup/>
             :''
            }

            { objects.ListBoxes.length
              &&
              objects.ListBoxes.map((lbox)=> {
                return <Table key={lbox.id} lbox={lbox}/>
              })
            }           

        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      objects: state.objects,
      users: state.users,
  }
}

export default connect(mapStateToProps, { setObjects })(
  Dashboard
)