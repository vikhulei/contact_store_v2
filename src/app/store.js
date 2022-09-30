import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../features/getTokenSlice";
import profileReducer from "../features/profileSlice"
import contactReducer from "../features/contactSlice"
import buttonsReducer from "../features/buttonsSlice"

const store = configureStore({
    reducer: {
        token: tokenReducer,
        profile: profileReducer,
        contacts: contactReducer,
        buttons: buttonsReducer,
    }
})

export default store