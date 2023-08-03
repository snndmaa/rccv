import { GET_USERS, SET_USER_ACTIVITY } from "../actionTypes"

export const getUsers = (users) => ({
    type: GET_USERS,
    payload: {
        users
    }
})

export const setUserActivity = (data) => ({
    type: SET_USER_ACTIVITY,
    payload: {
        data
    }
})