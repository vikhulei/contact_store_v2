import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


const initialState = {
    token: null,
    user: "",
    userId: "",
    password: ""
}

export const fetchToken = createAsyncThunk("token/getToken", async(login) => {
    const response = await login()
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('username', response.data);
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
        setPassword: (state, action) => {
            state.password = action.payload
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchToken.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.token = action.payload.token
            const user = action.payload.username.split("@")[0]
            const userId = user[user.length - 1]
            state.user = user
            state.userId = userId
        })
        .addCase(fetchToken.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
})


export const getTokenError = (state) => state.token.error;

export const { signOut, setPassword } = getTokenSlice.actions;

export default getTokenSlice.reducer