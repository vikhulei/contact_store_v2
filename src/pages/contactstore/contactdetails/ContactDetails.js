import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { DataBox, DataBoxNav } from "../../../components/ui/StyledComponents"
import { DataWrapper, SearchWrapper, SelectWrapper, DetailsLabel, DetailsInput, NumbersWrapper, CountryCode, AreaCode, Extension, PhoneNumber, ArrowWrapper, ArrowDown, ArrowUp, MobileButtonsWrapper } from "./ContactDetailsStyle"
import Search from "../../../components/search/Search"
import Select from "../../../components/select/Select"
import Buttons from "../buttons/Buttons"
import { emptyContact } from "../../../util/emptyContact"
import { getContacts, addContact, deleteContact } from "../../../axios/requestConfig"
import { fetchContacts, enableButton, showAddButton, showDeleteButton, showUpdateButton, disableButton, addContactThunk, addButtonAction, deleteContactThunk, deleteButtonAction, resetContactId, cancelButtonAction, cancelSelection } from "../../../features/contactSlice"

const ContactDetails = () => {

    const [showSelect, setShowSelect] = useState(false)
    const [contact, setContact] = useState(emptyContact)

    const dispatch = useDispatch()

    const contactsFromStore = useSelector(state => state.contacts.contacts)
    const contactId = useSelector(state => state.contacts.contactId)
    const disabledButton = useSelector(state => state.contacts.disabledButton)
    const deleteButton = useSelector(state => state.contacts.firstButton.delete)
    const updateButton = useSelector(state => state.contacts.firstButton.update)
    const cancelButtonPressed = useSelector(state => state.contacts.cancelButtonPressed)
    const addButtonPressed = useSelector(state => state.contacts.addButtonPressed)
    const deleteButtonPressed = useSelector(state => state.contacts.deleteButtonPressed)

    const contactFromStore = contactsFromStore.filter(value => value.id === contactId)[0]

    const { contactName, company, primaryEmailAddress } = contact

    const handleInput = () => {
        if (disabledButton) {
            dispatch(enableButton())
        }
        if (deleteButton && !updateButton) {
            dispatch(showUpdateButton())
        }
    }

    const handleSelect = () => {
        setShowSelect(!showSelect)
    }

    const handleAddContact = () => {
        dispatch(addContactThunk(function () { return addContact(contact) }))
        setContact(emptyContact)
        dispatch(addButtonAction(false))
        dispatch(disableButton())
    }

    const handleDeleteContact = () => {
        dispatch(deleteContactThunk(function(){return deleteContact(contactId)}))
        setContact(emptyContact)
        dispatch(deleteButtonAction(false))
        dispatch(disableButton())
    }

    useEffect(() => {
        if (contactFromStore) {
            setContact(contactFromStore)
            if(disabledButton || !deleteButton) {
                dispatch(enableButton())
                dispatch(showDeleteButton())
            }
        }
    }, [contactId])

    useEffect(() => {
        if(cancelButtonPressed) {
            dispatch(resetContactId())
            dispatch(cancelSelection())
            setContact(emptyContact)
            dispatch(showAddButton())
            dispatch(cancelButtonAction(false))
        }
    }, [cancelButtonPressed])

    // useEffect(() => {
    //     if(contactName === "" && company === "" && !disabledButton) {
    //         dispatch(disableButton())
    //         dispatch(showAddButton())
    //     }
    // }, [contactName, company])

    useEffect(() => {
        if (addButtonPressed) {
            handleAddContact()
        }
    }, [addButtonPressed])

    useEffect(() => {
        if(deleteButtonPressed) {
            handleDeleteContact()
        }
    }, [deleteButtonPressed])

    return (
        <>
            <DataBox>
                <DataBoxNav>Contact Details</DataBoxNav>
                <DataWrapper autoComplete="off">
                    <SearchWrapper>
                        <Search />
                        <ArrowWrapper onClick={handleSelect}>
                            {showSelect ? <ArrowUp /> : <ArrowDown />}
                        </ArrowWrapper>
                        <SelectWrapper showSelect={showSelect}>
                            {showSelect && <Select
                                handleSelect={handleSelect}
                            />}
                        </SelectWrapper>
                    </SearchWrapper>
                    <DetailsLabel>
                        Name:
                        <DetailsInput
                            value={contactName}
                            onChange={e => {
                                setContact(prev => ({ ...prev, contactName: e.target.value }))
                                handleInput()
                            }}
                        />
                    </DetailsLabel>
                    <DetailsLabel>
                        Company:
                        <DetailsInput
                            value={company}
                            onChange={e => {
                                setContact((prev) => ({ ...prev, company: e.target.value }))
                                handleInput()
                            }}
                        />
                    </DetailsLabel>
                    <DetailsLabel>
                        Email:
                        <DetailsInput
                            value={primaryEmailAddress}
                            onChange={e => {
                                setContact((prev) => ({ ...prev, primaryEmailAddress: e.target.value }))
                                handleInput()
                            }}
                        />
                    </DetailsLabel>
                    <DetailsLabel>Phone numbers:</DetailsLabel>
                </DataWrapper>
                <NumbersWrapper>
                    <CountryCode />
                    <AreaCode />
                    <Extension />
                    <PhoneNumber />
                </NumbersWrapper>
                <MobileButtonsWrapper>
                    <Buttons />
                </MobileButtonsWrapper>
            </DataBox>
        </>
    )
}

export default ContactDetails