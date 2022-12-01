import { combineReducers } from "redux";
import { INCREMENT } from "./actions";

const initialState = {
    currentNumber: 0,
    step: 1,
}

const incrementValue = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT: {
            return {
                ...state,
                currentNumber: state.currentNumber + 1,
            }
        }
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    increment: incrementValue,
});