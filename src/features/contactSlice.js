import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
    contact: {},
    countries: []
}

export const fetchContacts = createAsyncThunk("contacts/getData", async(getContacts) => {
    const response = await getContacts()
    const contactsData = response.data
    // console.log(contactsData)
    return contactsData
})

export const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        selectContact: (state, action) => {
            state.contact = action.payload
        },
        resetContact: (state) => {
            state.contact = {}
        }
    },
    extraReducers(builder) {
     builder
     .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload
     }) 
    }
})

export const {selectContact, resetContact} = contactSlice.actions

export default contactSlice.reducer