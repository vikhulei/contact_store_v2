import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../features/getTokenSlice";
import profileReducer from "../features/profileSlice"

const store = configureStore({
    reducer: {
        token: tokenReducer,
        profile: profileReducer,
    }
})

export default store