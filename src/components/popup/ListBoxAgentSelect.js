import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { setObjects, setDisplayPopup } from '../../actions/object/objectActions'
import CloudProviderAPI from '../../api/CloudProviderAPI'
import { getUsers } from '../../actions/user/userActions'

function ListBoxAgentSelect({ objects, setObjects, setDisplayPopup, getUsers, users }) {
    useEffect(() => {          
      new CloudProviderAPI().getUsers()
      .then(data => getUsers(data.entities))
    }, [])

    const [checkedList, setCheckedList] = useState({})

    const handleBoxCheck = (event) => {
        const checkedValue = event.target.checked
        const checkboxValue = event.target.value
    
        setCheckedList({
          ...checkedList,
          [checkboxValue]: checkedValue,
        })
    }

    const handleSubmit = async () => {
      const agentSelection = []      
      for (const [key, value] of Object.entries(checkedList)){
        if (value === true){
          users[0].users.map((user, i) => {
            if (key === user.id){
              let index_agent = {
                id: user.id,
                name: user.name
              }
              agentSelection.push(index_agent)
            }
          })
        }
      setObjects({
        id: objects.displayPopup[2],
        display: true,
        objectType: 'ListBox',
        agentSelection: agentSelection, 
      })
      }
      try{
        const response = fetch('http://38.242.142.241:8244/api/Agent/CreateStat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(agentSelection),
        })
        if (!response.ok) {
          throw new Error('Request failed');
        }
  
        console.log('Post request successful');
      }
      catch (error) {
        console.error('Error:', error);
      }
      setDisplayPopup(false, null, null)
      }


      return (
        <div className='bg-emerald-300 w-3/12 h-fit absolute left-0 right-0 m-auto top-1/4 rounded-lg flex flex-col justify-center items-center'>
          <h1 className=''>What Statistics would you like to view?</h1>
          <div className="formControl">
            <input type="checkbox" value='all_agents' checked={checkedList['all_agents'] || false} onChange={handleBoxCheck} />
            <label htmlFor=""> All Agents</label>
          </div>

          {users.length &&
           users[0].users.map((user, i) => {
            return(
              <div key={i} className="formControl">
                <input type="checkbox" value={user.id} checked={checkedList[user.id] || false} onChange={handleBoxCheck} />
                <label htmlFor=""> {user.name}</label>
              </div>
            )
          })}

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
  
export default connect(mapStateToProps, { setObjects, setDisplayPopup, getUsers })(ListBoxAgentSelect)