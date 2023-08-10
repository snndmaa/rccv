import { SET_OBJECT_DATA, SET_DISPLAY_POPUP } from "../actions/actionTypes"


const initialState = {
    displayPopup: [false, null],
    ListBoxes: [],
}

const objectReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_OBJECT_DATA:
            if (action.payload.data.objectType === "ListBox") {
                // If objectType is ListBox, add or edit the item in the list
                const updatedListBoxes = state.ListBoxes.slice() // Make a copy of the list
                const existingIndex = updatedListBoxes.findIndex(
                  (item) => item.id === action.payload.data.id
                )
        
                if (existingIndex !== -1) {
                  // If item with the same id exists, update it
                  updatedListBoxes[existingIndex] = action.payload.data
                } else {
                  // If item with the same id doesn't exist, add it
                  updatedListBoxes.push(action.payload.data)
                }
        
                return {
                  ...state,
                  ListBoxes: updatedListBoxes,
                }
              }
            return state; // If objectType is not ListBox, return the state as it is
        
        case SET_DISPLAY_POPUP:
            return{ 
                ...state, 
                displayPopup: [action.payload.value1, action.payload.value2] 
            }
        default:
            return state
    }
}

export default objectReducer