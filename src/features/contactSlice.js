import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCountryCodes } from "../axios/requestConfig";

const initialState = {
    contacts: [],
    countries: [],
    contactId: "",
    selected: false,
    firstButton: {
        add: true,
        delete: false,
        update: false
    },
    disabledButton: true,
    cancelButtonPressed: false,
    addButtonPressed: false,
    deleteButtonPressed: false,
    updateButtonPressed: false,
    searchValue: "",
}

export const fetchContacts = createAsyncThunk("contacts/getData", async(getContacts) => {
    const response = await getContacts()
    const contactsData = response.data
    return contactsData
})

export const addContactThunk = createAsyncThunk("contacts/addContact", async(addContact) => {
    const response = await addContact()
})

export const deleteContactThunk = createAsyncThunk("contacts/deleteContact", async(deleteContact) => {
    const response = await deleteContact()
})

export const updateContactThunk = createAsyncThunk("contacts/updateContact", async(updateContact) => {
    const response = await updateContact()
})

export const getCountryCodesThunk = createAsyncThunk("contacts/getCountryCodes", async() => {
    const response = await getCountryCodes()
    const countries = response.data
    return countries
})

export const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        getContactId: (state, action) => {
            state.contactId = action.payload
        },
        resetContactId: (state) => {
            state.contactId = ""
        },
        makeSelection: state => {
            state.selected = true
        },
        cancelSelection: state => {
            state.selected = false
        },
        enableButton: state => {
            state.disabledButton = false
        },
        disableButton: state => {
            state.disabledButton = true
        },
        showAddButton: state => {
            state.firstButton = {
                add: true,
                delete: false,
                update: false   
            }
        },
        showDeleteButton: state => {
            state.firstButton = {
                add: false,
                delete: true,
                update: false   
            }
        },
        showUpdateButton: state => {
            state.firstButton = {
                add: false,
                delete: false,
                update: true   
            }
        },
        cancelButtonAction: (state, action) => {
            state.cancelButtonPressed = action.payload
        },
        addButtonAction: (state, action) => {
            state.addButtonPressed = action.payload
        },
        deleteButtonAction: (state, action) => {
            state.deleteButtonPressed = action.payload
        },
        updateButtonAction: (state, action) => {
            state.updateButtonPressed = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        }
    },
    extraReducers(builder) {
     builder
     .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload
     }) 
     .addCase(getCountryCodesThunk.fulfilled, (state,action) => {
        state.countries = action.payload
     })
    }
})

export const {getContactId, resetContactId,  makeSelection, cancelSelection, enableButton, disableButton, showAddButton, showDeleteButton, showUpdateButton, cancelButtonAction, addButtonAction, deleteButtonAction, updateButtonAction, setSearchValue} = contactSlice.actions

export default contactSlice.reducer