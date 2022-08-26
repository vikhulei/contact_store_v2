import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false
}

export const authSlice = createSlice({
    name: "authorization",
    initialState,
    reducers: {
        activateAuth: (state) => {
            state.auth = true
        }
    }
})

export const { activateAuth } = authSlice.actions;

export default authSlice.reducer;