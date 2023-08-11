import React, { useState } from 'react'
import { connect } from 'react-redux'

import { setObjects, setDisplayPopup } from '../../actions/object/objectActions'
import CloudProviderAPI from '../../api/CloudProviderAPI'
import { getUsers } from '../../actions/user/userActions'


function ListBoxStatSelect({ objects, setObjects, setDisplayPopup, getUsers, users }) {
  const [checkedList, setCheckedList] = useState({})
  const index = objects.ListBoxes.length + 1  
  const id = `listbox${index}`

  const handleBoxCheck = (event) => {
    const checkedValue = event.target.checked
    const checkboxValue = event.target.value

    setCheckedList({
      ...checkedList,
      [checkboxValue]: checkedValue,
    })
  }

  const handleSubmit = () => {
    setDisplayPopup(true, 'AgentSelect', id)

    setObjects({
      id: id,
      display: false,
      objectType: 'ListBox',
      statSelection: checkedList,
    })
  }


  return (
    <div className='bg-emerald-300 w-3/12 h-3/6 absolute left-0 right-0 m-auto top-1/4 rounded-lg flex flex-col justify-center items-center'>
      <h1 className='absolute left-0 right-0 m-auto top-7 w-fit'>What Statistics would you like to view?</h1>
      <div className="formControl">
        <input type="checkbox" value='current_agent_state' checked={checkedList['current_agent_state'] || false} onChange={handleBoxCheck} />
        <label htmlFor=""> Current Agent State</label>
      </div>
      <div className="formControl">
        <input type="checkbox" value="system_presence" checked={checkedList['system_presence'] || false} onChange={handleBoxCheck} />
        <label htmlFor=""> System Presence</label>
      </div>
      <div className="formControl">
        <input type="checkbox" value="agent_routing_status" checked={checkedList['agent_routing_status'] || false} onChange={handleBoxCheck} />
        <label htmlFor=""> Agent Routing Status</label>
      </div>
      <div className="formControl">
        <input type="checkbox" value="no_outbound_calls" checked={checkedList['no_outbound_calls'] || false} onChange={handleBoxCheck} />
        <label htmlFor=""> Organization Presence</label>
      </div>
      <button className='m-5' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    objects: state.objects,
    users: state.users,
  }
}

export default connect(mapStateToProps, { setObjects, setDisplayPopup, getUsers })(ListBoxStatSelect)
