import React, {useState} from 'react'
import { connect } from 'react-redux'

import { setDisplayPopup } from '../../actions/object/objectActions'


function ContextMenu({ x, y, setDisplayPopup}) {
  const [nestValues, setNestValues] = useState(null)

  const insertObjectState = (objectType) => {
    if (objectType === 'ListBox'){
      setDisplayPopup(true, 'StatSelect', null)
    }
  }

  const handleNesting = (option) => {
    setNestValues(null)
    if (option === 'statistics'){
      setNestValues(['ListBox', 'Object Addition', 'Object StatBox', 'Rotation StatBox', 'Stat Chart', 'Stat Box', 'Stat Only', 'Widgets'])
    }
  }

  return (
    <div
        style={{
            position: 'absolute',
            top: y,
            left: x,
            width: '20%',
            display: 'flex',            
            zIndex: 50,
            cursor: 'pointer'
        }}
    >
    <div style={{
      width: '50%',
      height: '60%',
      
      backgroundColor: 'white',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
      zIndex: 50,
    }}>
      <ul style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        <li style={{width:'85%'}} onMouseEnter={() => handleNesting('statistics')}>Statistics</li>
        <li  style={{width:'85%'}} onMouseEnter={() => handleNesting('Layout')}>Layout</li>
        <li  style={{width:'85%'}} onMouseEnter={() => handleNesting('Media')}>Media</li>
        <li  style={{width:'85%' }} onMouseEnter={() => handleNesting('Save')}>Save</li>
      </ul>
    </div>
    {/* <ul>
        <li onClick={() => insertObjectState('ListBox')}>&nbsp;ListBox</li>
    </ul> */}
    <div style={{
      width: '50%',
      height: '60%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'white',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
      zIndex: 50,
    }}>
      <ul style={{width: '100%', textAlign: 'center'}}>
        {nestValues && nestValues.map((value, i) => {
          return <li key={i}  onClick={() => insertObjectState('ListBox')} style={{width:'100%' }}>{value}</li>
        })}
      </ul>
    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
    return {
        objects: state.objects,
    }
}

export default connect(mapStateToProps, { setDisplayPopup })(
    ContextMenu
)