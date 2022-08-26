import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false
}

export const authSlice = createSlice({
    name: "authorization",
    initialState,
    reducers: {
        signIn: (state) => {
            state.auth = true
        },
        signOut: (state) => {
            state.auth = false
        }
    }
})

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;