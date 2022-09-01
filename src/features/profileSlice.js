import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {profileData} from "../axios/requestConfig"


const initialState = {
    profileData: {},
    profileImage: null,
    password: ""
}

export const fetchProfileData = createAsyncThunk("profile/getData", async() => {
    const response = await profileData() 
    return response.data
})

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
        .addCase(fetchProfileData.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.profileData = action.payload
        })
    }
})

export const {} = profileSlice.actions;

export default profileSlice.reducer
