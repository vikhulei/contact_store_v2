import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../features/getTokenSlice";
import profileReducer from "../features/profileSlice"

const store = configureStore({
    reducer: {
        token: tokenReducer,
        profileData: profileReducer,
    }
})

export default store