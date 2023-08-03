import { SET_OBJECT_DATA } from "../actions/actionTypes"


const initialState = {
    ListBox: {},
}

const objectReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_OBJECT_DATA:
            return [...state, action.payload]
        default:
            return state
    }
}

export default objectReducer