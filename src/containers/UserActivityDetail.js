import { useEffect, useState } from "react"
import { connect } from "react-redux"

import { setUserActivity } from "../actions/user/userActions"
import { fetchUserActivityInterval } from "../actions/user/userCalls"


function UserActivityDetail({ userID, startTime, endTime }) {
    const [isDataLoaded, setIsDataLoaded] = useState(false)
  
    useEffect(() => {
        (async()=>{
        const userData = await fetchUserActivityInterval(userID, startTime, endTime)
        setUserActivity(userData)
        setIsDataLoaded(true)
        })()
    }, [ userID, startTime, endTime ])

    // Add a conditional check to handle undefined or empty users array
    if (!isDataLoaded) {
        return <p>Loading...</p>;
    }
    return (
        <div>UserActivityDetail</div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, { setUserActivity })(
    UserActivityDetail
)