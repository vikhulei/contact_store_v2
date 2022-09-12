import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LargeButton } from "../../../components/ui/StyledComponents"
import { ButtonsWrapper, ProfileButton } from "./ButtonsStyle"
import { cancelSelection, resetContactId, disableButton, showAddButton, cancelButtonAction, addButtonAction, deleteButtonAction } from "../../../features/contactSlice"

const Buttons = () => {

    const dispatch = useDispatch()

    const firstButton = useSelector(state => state.contacts.firstButton)

    const disabledButton = useSelector(state => state.contacts.disabledButton)

    const addButton = () => {
        // alert("add")\
        dispatch(addButtonAction(true))
    }
    const deleteButton = () => {
        // console.log("delete")
        dispatch(deleteButtonAction(true))
    }
    const updateButton = () => {
        console.log("update")
    }

    const profileButton = () => {
        console.log(sessionStorage.getItem('token'))
    }

    const cancelButton = (e) => {
        e.preventDefault()
        dispatch(cancelButtonAction(true))
        // dispatch(cancelSelection())
        // dispatch(resetContactId())
        // // dispatch(showAddButton())
        // dispatch(disableButton())
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