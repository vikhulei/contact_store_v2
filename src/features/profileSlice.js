import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getProfileData, getProfileImage, uploadProfileImage} from "../axios/requestConfig"


const initialState = {
    profileData: {},
    profileImage: null,
    password: ""
}

export const fetchProfileData = createAsyncThunk("profile/getData", async() => {
    const response = await getProfileData()
    const profileData = response.data 
    return profileData
})

export const fetchProfileImage = createAsyncThunk("profile/getImage", async() => {
    const response = await getProfileImage()
    const image = URL.createObjectURL(response.data)
    return image
})

export const postProfileImage = createAsyncThunk("profile/postImage", async(formData) => {
    const response = await uploadProfileImage(
        {data: formData}
    )


})

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchProfileData.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.profileData = action.payload
        })
        .addCase(fetchProfileImage.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.profileImage = action.payload
        })
    }
})

export const {} = profileSlice.actions;

export default profileSlice.reducer
