import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { emptyContact } from "../util/emptyContact";

const initialState = {
    contacts: [],
    countries: [],
    contactId: "",
    contact: emptyContact,
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
    updateButtonPressed: false
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

export const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        selectContact: (state, action) => {
            state.contact = action.payload
        },
        getContactId: (state, action) => {
            state.contactId = action.payload
        },
        resetContactId: (state) => {
            state.contactId = ""
        },
        populateContact: (state, action) => {
            state.contact = action.payload
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
        }
    },
    extraReducers(builder) {
     builder
     .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload
     }) 
    }
})

export const {selectContact, getContactId, resetContactId, populateContact, makeSelection, cancelSelection, enableButton, disableButton, showAddButton, showDeleteButton, showUpdateButton, cancelButtonAction, addButtonAction, deleteButtonAction, updateButtonAction} = contactSlice.actions

export default contactSlice.reducer