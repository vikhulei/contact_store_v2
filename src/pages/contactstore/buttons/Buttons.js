import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LargeButton } from "../../../components/ui/StyledComponents"
import { ButtonsWrapper, ProfileButton } from "./ButtonsStyle"
import { cancelSelection, resetContactId, disableButton, showAddButton, cancelButtonAction, addButtonAction, deleteButtonAction, updateButtonAction } from "../../../features/contactSlice"

const Buttons = () => {

    const dispatch = useDispatch()

    const firstButton = useSelector(state => state.contacts.firstButton)

    const disabledButton = useSelector(state => state.contacts.disabledButton)

    const addButton = () => {
        dispatch(addButtonAction(true))
    }
    const deleteButton = () => {
        dispatch(deleteButtonAction(true))
    }
    const updateButton = () => {
        dispatch(updateButtonAction(true))
    }

    const profileButton = () => {
        document.getElementById("profile").scrollIntoView({
            behavior: "smooth"
        })
    }

    const cancelButton = () => {
        dispatch(cancelButtonAction(true))
    }

    return (
        <ButtonsWrapper>
            <LargeButton
                onClick={firstButton.add ? addButton : firstButton.delete ? deleteButton : updateButton}
                disabled={disabledButton}
            >
                {firstButton.add ? "Add" : firstButton.delete ? "Delete" : "Update"}
            </LargeButton>
            <ProfileButton onClick={profileButton}>Profile</ProfileButton>
            <LargeButton
                disabled={disabledButton}
                onClick={cancelButton}
            >Cancel</LargeButton>
        </ButtonsWrapper>
    )
}

export default Buttons