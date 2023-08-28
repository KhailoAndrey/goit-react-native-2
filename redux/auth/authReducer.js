import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userId: null,
        nickname: null,
        isAuth: false,
    },
    reducers: {
setAuthStatus: (state, action) => {
      state.isAuth = action.payload;
    },
    }
});

export const { setAuthStatus } = authSlice.actions;
export default authSlice.reducer;