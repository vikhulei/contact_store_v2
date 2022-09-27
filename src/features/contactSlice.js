import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact, updateContact, getCountryCodes } from "../axios/intercept";

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
    showSelect: false,
    errorContacts: "",
}

export const fetchContacts = createAsyncThunk("contacts/getData", async (data, { rejectWithValue }) => {
    try {
        const response = await getContacts(data)
        const contactsData = response.data
        return contactsData
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const addContactThunk = createAsyncThunk("contacts/addContact", async (contact, { rejectWithValue }) => {
    try {
        const response = await addContact({
            data: contact
        })
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const deleteContactThunk = createAsyncThunk("contacts/deleteContact", async (contactId, { rejectWithValue }) => {
    try {
        const response = await deleteContact(
            {
            url: `/${contactId}`
        }
        )
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const updateContactThunk = createAsyncThunk("contacts/updateContact", async ({contactId, contact}, {rejectWithValue}) => {
    try {
        const response = await updateContact({
            url: `/${contactId}`,
            data: contact
        })
    } catch(error) {
        return rejectWithValue(error)
    }
})

export const getCountryCodesThunk = createAsyncThunk("contacts/getCountryCodes", async (data, { rejectWithValue }) => {
    try {
        const response = await getCountryCodes()
        const countries = response.data
        return countries
    } catch (error) {
        return rejectWithValue(error)
    }
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
        },
        showSelectList: (state) => {
            state.showSelect = !state.showSelect
        },
        clearContacts: () => initialState
    },
    extraReducers(builder) {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts = action.payload
            })
            .addCase(fetchContacts.rejected,
                (state, action) => {
                    state.errorContacts = action.payload
                })
            .addCase(addContactThunk.fulfilled,
                (state, action) => {
                    state.status = "succeeded"
                    state.errorContacts = ""
                })
            .addCase(addContactThunk.rejected,
                (state, action) => {
                    state.errorContacts = action.payload
                })
            .addCase(deleteContactThunk.fulfilled,
                (state, action) => {
                    state.status = "succeeded"
                    state.errorContacts = ""
                })
            .addCase(deleteContactThunk.rejected,
                (state, action) => {
                    state.errorContacts = action.payload
                })
            .addCase(updateContactThunk.fulfilled,
                (state, action) => {
                    state.status = "succeeded"
                    state.errorContacts = ""
                })
            .addCase(updateContactThunk.rejected,
                (state, action) => {
                    state.errorContacts = action.payload
                })
            .addCase(getCountryCodesThunk.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.countries = action.payload
                // sessionStorage.setItem("countryCodes", JSON.stringify(action.payload))
            })
            .addCase(getCountryCodesThunk.rejected,
                (state, action) => {
                    state.status = "failed"
                    state.errorContacts = action.payload
                }
            )
    }
})

export const { getContactId, resetContactId, makeSelection, cancelSelection, enableButton, disableButton, showAddButton, showDeleteButton, showUpdateButton, cancelButtonAction, addButtonAction, deleteButtonAction, updateButtonAction, setSearchValue, showSelectList, clearContacts } = contactSlice.actions

export default contactSlice.reducer