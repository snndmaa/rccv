import { SET_OBJECT_DATA } from "../actionTypes"


export const setObjects = (data) => ({
    type: SET_OBJECT_DATA,
    payload: {
        data
    }
})