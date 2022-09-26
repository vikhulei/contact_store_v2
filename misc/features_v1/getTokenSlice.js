import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { login } from "../axios/interceptRequest"


// const handleError = (action, state) => {
//     if(action.payload.status === 405) {
//         state.error = "Wrong axios method is used"
//     } else if (action.payload.status === 401) {
//         state.error = "Wrong credentials are used"
//     }
// }

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
        // console.log(response.data)
        return response.data
    } catch(error) {
        return rejectWithValue(error)
    }
})
// export const fetchToken = createAsyncThunk("token/getToken", async(login, {rejectWithValue}) => {
//     try {
//         const response = await login()
//         return response.data
//     } catch(error) {
//         // console.log(error)
//         return rejectWithValue(error.response.data)
//     }
// })

export const getTokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        signOut: state => {
            state.token = ""
            state.error = ""
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchToken.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.token = action.payload.token
            sessionStorage.setItem('token', action.payload.token);
            sessionStorage.setItem('username', action.payload.username);
        })
        .addCase(fetchToken.rejected, (state, action) => {
            state.status = "failed"
            state.errorMessage = action.payload
        })
    }
})


export const getTokenError = (state) => state.token.error;

export const { signOut, setPassword, setErrorMessage } = getTokenSlice.actions;

export default getTokenSlice.reducer