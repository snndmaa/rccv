import { SET_OBJECT_DATA, SET_DISPLAY_POPUP } from "../actionTypes"


export const setObjects = (data) => ({
    type: SET_OBJECT_DATA,
    payload: {
        data
    }
})

export const setDisplayPopup = (value1, value2, value3) => ({
    type: SET_DISPLAY_POPUP,
    payload: {
        value1,
        value2,
        value3
    },
})