import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { getUsers } from '../actions/user/userActions'
import { fetchUsers } from '../actions/user/userCalls'
import UserItem from '../components/user/UserItem'


function UserList({ users, getUsers }) {
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  useEffect(() => {
    (async()=>{
      const userData = await fetchUsers()
      getUsers(userData.entities)
      setIsDataLoaded(true)
    })()
  }, [getUsers])

  // Add a conditional check to handle undefined or empty users array
  if (!isDataLoaded || !users || users.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {
        users !== 0 &&
        users[0].users.map((user, i) => {
          return <UserItem key={i} user={user}/> 
        })
        
      }
    
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps, { getUsers })(
  UserList
)