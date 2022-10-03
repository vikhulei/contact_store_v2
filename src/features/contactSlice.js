import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact, updateContact, getCountryCodes } from "../axios/intercept";

const initialState = {
    contacts: [],
    countries: [],
    contactId: "",
    selected: false,
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
        await addContact({
            data: contact
        })
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const deleteContactThunk = createAsyncThunk("contacts/deleteContact", async (contactId, { rejectWithValue }) => {
    try {
        await deleteContact(
            {
                url: `/${contactId}`
            }
        )
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const updateContactThunk = createAsyncThunk("contacts/updateContact", async ({ contactId, contact }, { rejectWithValue }) => {
    try {
        await updateContact({
            url: `/${contactId}`,
            data: contact
        })
    } catch (error) {
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
            .addCase(fetchContacts.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts = action.payload
                state.status = "succeeded"
            })
            .addCase(fetchContacts.rejected,
                (state, action) => {
                    state.errorContacts = action.payload
                    state.status = "failed"
                })
            .addCase(addContactThunk.fulfilled,
                (state) => {
                    state.status = "succeeded"
                    state.errorContacts = ""
                })
            .addCase(addContactThunk.rejected,
                (state, action) => {
                    state.errorContacts = action.payload
                })
            .addCase(deleteContactThunk.fulfilled,
                (state) => {
                    state.status = "succeeded"
                    state.errorContacts = ""
                })
            .addCase(deleteContactThunk.rejected,
                (state, action) => {
                    state.errorContacts = action.payload
                })
            .addCase(updateContactThunk.fulfilled,
                (state) => {
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
            })
            .addCase(getCountryCodesThunk.rejected,
                (state, action) => {
                    state.status = "failed"
                    state.errorContacts = action.payload
                }
            )
    }
})

export const { getContactId, resetContactId, makeSelection, cancelSelection, setSearchValue, showSelectList, clearContacts } = contactSlice.actions

export default contactSlice.reducer