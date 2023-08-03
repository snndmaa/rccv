// import store from "../store/store"

export const fetchUsers = async () => {
    try{
        const response = await fetch('https://api.euw2.pure.cloud/api/v2/users', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer PLOdloXIJEGHxrdE9iwhJxtZvewwuy2UmdSDjFJO_PmBlzNch9TYtqwKLacTB88kusCaT86JRuiqh_ItNjRHpA'
            }
        })
        if (!response.ok){
            throw new Error('Request Failed')
        }
        // store.dispatch(getUsers(await response.json()))
        const data = await response.json()
        return data
    }
    catch (error){
        console.log(error)
    }
}

export const fetchUserActivityInterval = async (userID, startTime, endTime) => {
    console.log(userID, startTime, endTime)
    const payload = {
        "interval": "2023-07-01T00:00:00.000Z/2023-07-02T00:00:00.000Z",
        "granularity": "PT12H",
        "groupBy": [
          "userId"
        ],
        "metrics": [
          "tOrganizationPresence",
          "tAgentRoutingStatus"
        ],
        "filter": {
          "type": "or",
          "predicates": [
            {
              "dimension": "userId",
              "value": "2a0725c4-b74f-4b69-b363-bb7020d73bc6"
            }
          ]
        }
    }
    try{
        const response = await fetch('https://api.euw2.pure.cloud/api/v2/analytics/users/aggregates/query', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer PLOdloXIJEGHxrdE9iwhJxtZvewwuy2UmdSDjFJO_PmBlzNch9TYtqwKLacTB88kusCaT86JRuiqh_ItNjRHpA',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        if (!response.ok){
            throw new Error('Request Failed')
        }
        // store.dispatch(getUsers(await response.json()))
        const data = await response.json()
        return data
    }
    catch (error){
        console.log(error)
    }
}