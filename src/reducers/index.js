import { combineReducers } from "redux"

import userReducer from "./userReducer"
import objectReducer from "./objectReducer"


const rootReducer = combineReducers({
    users: userReducer,
    objects: objectReducer
})

export default rootReducer