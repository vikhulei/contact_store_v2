import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {login} from "../axios/requestConfig"

const initialState = {
    token: null,
    user: "user3",
}

export const fetchToken = createAsyncThunk("token/getToken", async({username, password}) => {
    const response = await login({
        data:
        {
            password: password,
            username: username
        }}
        )
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem("username", username)
        return response.data
})

export const getTokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        signOut: state => {
            state.token = null
            state.error = null
        },
    },
    extraReducers(builder) {
        builder
        .addCase(fetchToken.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.token = action.payload.token
        })
        .addCase(fetchToken.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
})


export const getTokenError = (state) => state.token.error;

export const { signOut } = getTokenSlice.actions;

export default getTokenSlice.reducer