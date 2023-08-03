import React from 'react'
import { connect } from 'react-redux'
import { setObjects } from '../actions/object/objectActions'

function ContextMenu({ x, y}) {
  const insertObjectState = () => {

  }

  return (
    <div
        style={{
            position: 'absolute',
            top: y,
            left: x,
            backgroundColor: 'white',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            display: 'flex',
        }}
    >
    <ul>
      <li onClick={() => {alert('zzz')}}>Statistics</li>
      <li onClick={() => {}}>Layout</li>
      <li onClick={() => {}}>Media</li>
      <li onClick={() => {}}>Save</li>
    </ul>
    <ul>
        <li onClick={insertObjectState}>ListBox</li>
    </ul>
  </div>
  )
}

const mapStateToProps = (state) => {
    return {
        objects: state.objects,
    }
}

export default connect(mapStateToProps, { setObjects })(
    ContextMenu
)