import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getProfileImage, uploadProfileImage, changePassword} from "../axios/requestConfig"
// import {getProfileData} from "../axios/intercept"


const initialState = {
    profileData: {},
    profileImage: null,
    password: ""
}

export const fetchProfileData = createAsyncThunk("profile/getData", async(getProfileData) => {
    const response = await getProfileData()
    const profileData = response.data 
    return profileData
})
// export const fetchProfileData = createAsyncThunk("profile/getData", async(token) => {
//     const response = await getProfileData(
//         { headers: { "Authorization": `Bearer ${token}` }}
//     )
//     const profileData = response.data 
//     return profileData
// })

export const fetchProfileImage = createAsyncThunk("profile/getImage", async(userId) => {
    // console.log(username)
    const response = await getProfileImage(
        {url: `/profile/profileImage/${userId}`}
    )
    const image = URL.createObjectURL(response.data)
    return image
})

export const postProfileImage = createAsyncThunk("profile/postImage", async({token, user, formData}) => {
    const response = await uploadProfileImage(
        {
            headers: { "Authorization": `Bearer ${token}` },
            data: formData,
            param: {name: user}
        }
    )
})

export const updatePassword = createAsyncThunk("profile/changePassword", async({token, user, oldPassword, newPassword}) => {
    const response = await changePassword(
        {
            headers: { "Authorization": `Bearer ${token}` },
            data: {
                newPassword: newPassword,
                oldPassword: oldPassword
            },
            param: {name: user}
        }
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
