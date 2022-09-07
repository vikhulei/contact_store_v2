import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../features/getTokenSlice";
import profileReducer from "../features/profileSlice"
import contactReducer from "../features/contactSlice"

const store = configureStore({
    reducer: {
        token: tokenReducer,
        profile: profileReducer,
        contact: contactReducer,
    }
})

export default store