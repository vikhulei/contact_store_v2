import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { login } from "../axios/intercept"


const initialState = {
    token: "",
    errorMessage: "",
}

export const fetchToken = createAsyncThunk("token/getToken", async({username, password}, {rejectWithValue}) => {
    try {
        const response = await login({
            data: {
                username: username,
                password: password
            }
        })
        return response.data
    } catch(error) {
        return rejectWithValue(error)
    }
})

export const getTokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        clearToken: () => initialState
    },
    extraReducers(builder) {
        builder
        .addCase(fetchToken.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.token = action.payload.token
            state.password = action.payload.password
            sessionStorage.setItem('token', action.payload.token);
            sessionStorage.setItem('username', action.payload.username);
        })
        .addCase(fetchToken.rejected, (state, action) => {
            state.status = "failed"
            state.errorMessage = action.payload
        })
    }
})

export const { clearToken } = getTokenSlice.actions;

export default getTokenSlice.reducer