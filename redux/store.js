import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { authSlice } from './auth/authReducer';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer,
})