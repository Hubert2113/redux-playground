import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
    currentNumber: 0,
    step: 1,
}

const rootReducer = (state = initialState, action) => {
    return state;
}

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);