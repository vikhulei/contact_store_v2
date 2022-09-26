import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { getProfileData, getProfileImage, uploadProfileImage, changePassword } from "../axios/intercept";


const initialState = {
    profileData: {},
    profileImage: null,
    password: "",
    errorProfileData: "",
    errorProfileImage: "",
    errorProfilePassword: "",
}

export const fetchProfileData = createAsyncThunk("profile/getData", async(data, {rejectWithValue}) => {
    try {
        const response = await getProfileData(data)
        const profileData = response.data 
        return profileData
    } catch(error) {
        return rejectWithValue(error)
    }
})


export const fetchProfileImage = createAsyncThunk("profile/getImage", async(data, {rejectWithValue}) => {
    try {
        const response = await getProfileImage(data)
        const image = URL.createObjectURL(response.data)
        return image
    } catch(error) {
        return rejectWithValue(error)
    }
})

export const postProfileImage = createAsyncThunk("profile/postImage", async(formData, {rejectWithValue}) => {
    try {
        const response = await uploadProfileImage({
            data: formData,
        })
    } catch(error) {
        return rejectWithValue(error)
    }
})

export const updatePassword = createAsyncThunk("profile/changePassword", async({newPassword, oldPassword}, {rejectWithValue}) => {
    try {
        const response = await changePassword({data: {
                newPassword: newPassword,
                oldPassword: oldPassword
            }}
        )
        sessionStorage.setItem("psw", newPassword)
        // console.log(response)
    } catch(error) {
        // console.log(error)
        return rejectWithValue(error)
    }
})


export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        clearProfile: () => initialState
    },
    extraReducers(builder) {
        builder
        .addCase(fetchProfileData.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.profileData = action.payload
        })
        .addCase(fetchProfileData.rejected, (state, action) => {
            state.status = "failed"
            state.errorProfileData = action.payload
        })
        .addCase(fetchProfileImage.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.profileImage = action.payload
        })
        .addCase(fetchProfileImage.rejected,
            (state, action) => {
                state.status = "failed"
                state.errorProfileImage = action.payload
            })
            .addCase(postProfileImage.fulfilled, 
                (state, action) => {
                    state.status = "succeeded"
                    state.errorProfileImage = ""
                })
                .addCase(postProfileImage.rejected,
                    (state, action) => {
                        state.status = "failed"
                        state.errorProfileImage = action.payload
                    })
                    .addCase(updatePassword.fulfilled,  
                        (state) => {
                            state.status = "succeeded"
                            state.errorProfilePassword = "PASSWORD UPDATED"
                        })
                        .addCase(updatePassword.rejected, 
                            (state, action) => {
                                state.status = "failed"
                                state.errorProfilePassword = action.payload
                            }
            )
    }
})

export const {clearProfile} = profileSlice.actions;

export default profileSlice.reducer
