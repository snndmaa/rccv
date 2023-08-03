import { GET_USERS, SET_USER_ACTIVITY } from "../actions/actionTypes"


const initialState = []

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_USERS:
            return [...state, action.payload]
        
        case SET_USER_ACTIVITY:
            return [...state, action.payload]
    
        default: 
            return state
    }
}

export default userReducer