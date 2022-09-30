import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
}


export const buttonsSlice = createSlice({
    name: "buttons",
    initialState,
    reducers: {
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
    }
})

export const { enableButton, disableButton, showAddButton, showDeleteButton, showUpdateButton, cancelButtonAction, addButtonAction, deleteButtonAction, updateButtonAction } = buttonsSlice.actions

export default buttonsSlice.reducer