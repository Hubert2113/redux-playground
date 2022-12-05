import { configureStore } from '@reduxjs/toolkit';
import { stateReducer } from './reducers';

export const store = configureStore({
    reducer: stateReducer,
})