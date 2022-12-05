import { createReducer } from "@reduxjs/toolkit";
import {
    INCREMENT,
    DECREMENT,
    CHANGE_VALUE,
} from './actions';

const initialState = {
    currentNumber: 0,
    step: 1,
}

export const stateReducer = createReducer(initialState, {
    [INCREMENT]: (state, action) => {
        return {
            ...state,
            currentNumber: parseInt(state.currentNumber) + parseInt(state.step),
        }
    },
    [DECREMENT]: (state, action) => {
        return {
            ...state,
            currentNumber: parseInt(state.currentNumber) - parseInt(state.step),
        }
    },
    [CHANGE_VALUE]: (state, action) => {
        return {
            ...state,
            step: action.payload,
        }
    },
});