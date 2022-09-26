import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { v4 as uuid } from "uuid"
import useWindowWidth from "../../../util/useWindowWidth"
import { DataBox, DataBoxNav, ErrorText } from "../../../components/ui/StyledComponents"
import { DataWrapper, SearchWrapper, SelectWrapper, DetailsLabel, DetailsInput, NumbersWrapper, CountryCode, AreaCode, Extension, PhoneNumber, ArrowWrapper, ArrowDown, ArrowUp, MobileButtonsWrapper, DeleteIcon, AddIcon, SelectMobile } from "./ContactDetailsStyle"
import Search from "../../../components/search/Search"
import Select from "../../../components/select/Select"
import Buttons from "../buttons/Buttons"
import { emptyContact } from "../../../util/emptyContact"
import { getContacts, addContact, deleteContact, updateContact } from "../../../axios/requestConfig"
import { fetchContacts, enableButton, showAddButton, showDeleteButton, showUpdateButton, disableButton, addContactThunk, deleteContactThunk, updateContactThunk, addButtonAction, deleteButtonAction, updateButtonAction, resetContactId, cancelButtonAction, cancelSelection, showSelectList } from "../../../features/contactSlice"

const ContactDetails = () => {

    const [contact, setContact] = useState(emptyContact)

    const [desktop] = useWindowWidth()

    const numberId = uuid()

    const dispatch = useDispatch()

    const contactsFromStore = useSelector(state => state.contacts.contacts)
    const contactId = useSelector(state => state.contacts.contactId)
    const countries = useSelector(state => state.contacts.countries)
    const disabledButton = useSelector(state => state.contacts.disabledButton)
    const deleteButton = useSelector(state => state.contacts.firstButton.delete)
    const updateButton = useSelector(state => state.contacts.firstButton.update)
    const cancelButtonPressed = useSelector(state => state.contacts.cancelButtonPressed)
    const addButtonPressed = useSelector(state => state.contacts.addButtonPressed)
    const deleteButtonPressed = useSelector(state => state.contacts.deleteButtonPressed)
    const updateButtonPressed = useSelector(state => state.contacts.updateButtonPressed)
    const showSelect = useSelector(state => state.contacts.showSelect)
    const errorMessage = useSelector(state => state.contacts.errorContactDetails)

    // const countries = sessionStorage.countryCodes ? JSON.parse(sessionStorage.countryCodes) : null
    

    const contactFromStore = contactsFromStore.filter(value => value.id === contactId)[0]

    const phoneNumberSplit = contactFromStore ? contactFromStore.phoneNumbers.map((val, idx) => ({
            areaCode: val.phoneNumberFormatted.split("-")[1],
            category: val.category,
            countryCode: val.phoneNumberFormatted.split("-")[0],
            extension: val.phoneNumberFormatted.split("-")[2].split("#")[1],
            id: val.id,
            number: val.phoneNumberFormatted.split("-")[2].split("#")[0]
        })) : ""

    const selectContact = () => {
        if (contactFromStore) {
            setContact(contactFromStore)
            setContact(prev => ({...prev, phoneNumbers: phoneNumberSplit}))
            if (disabledButton || !deleteButton) {
                dispatch(enableButton())
                dispatch(showDeleteButton())
            }
        }
    }

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
        dispatch(showSelectList())
    }

const handleCancelButton = () => {
    dispatch(resetContactId())
    dispatch(cancelSelection())
    setContact(emptyContact)
    dispatch(showAddButton())
    dispatch(disableButton())
    dispatch(cancelButtonAction(false))
}

    const handleAddContact = async() => {
        await dispatch(addContactThunk(function () { return addContact(contact) }))
        await dispatch(fetchContacts(getContacts))
        setContact(emptyContact)
        dispatch(addButtonAction(false))
        dispatch(disableButton())
    }

    const handleDeleteContact = async() => {
        await dispatch(deleteContactThunk(function () { return deleteContact(contactId) }))
        await dispatch(fetchContacts(getContacts))
        setContact(emptyContact)
        dispatch(deleteButtonAction(false))
        dispatch(showAddButton())
        dispatch(disableButton())
    }

    const handleUpdateContact = async() => {
        await dispatch(updateContactThunk(function () { return updateContact(contactId, contact) }))
        await dispatch(fetchContacts(getContacts))
        dispatch(updateButtonAction(false))
        dispatch(showDeleteButton())
    }

    const updatePhoneNumber = (e, idx, property) => {
        const newState = contact.phoneNumbers.map(val => ({...val}))
        newState[idx][`${property}`] = e.target.value 
        setContact(prev => ({...prev, phoneNumbers: [...newState]}))
    }

    const deletePhoneNumber = (id) => {
        const newState = contact.phoneNumbers.filter(val => val.id !== id)
        setContact(prev => ({...prev, phoneNumbers: [...newState]}))
        if(deleteButton) {
            dispatch(showUpdateButton())
        }
    }

    const addPhoneNumber = () => {
        const newState = contact.phoneNumbers.map(val => ({...val}))
        const newNumber = emptyContact.phoneNumbers.map(val => ({...val}))[0]
        newNumber.id = numberId
        newState.push(newNumber)
        setContact(prev => ({...prev, phoneNumbers: [...newState, ]}))
        if(deleteButton) {
            dispatch(showUpdateButton())
        }
    }

    useEffect(() => {
        selectContact()
    }, [contactId])

    useEffect(() => {
        if (cancelButtonPressed) {
            handleCancelButton()
            // dispatch(resetContactId())
            // dispatch(cancelSelection())
            // setContact(emptyContact)
            // dispatch(showAddButton())
            // dispatch(disableButton())
            // dispatch(cancelButtonAction(false))
        }
    }, [cancelButtonPressed])

    useEffect(() => {
        if (addButtonPressed) {
            handleAddContact()
        }
    }, [addButtonPressed])

    useEffect(() => {
        if (deleteButtonPressed) {
            handleDeleteContact()
        }
    }, [deleteButtonPressed])

    useEffect(() => {
        if (updateButtonPressed) {
            handleUpdateContact()
        }
    }, [updateButtonPressed])

    return (
        <>
            <DataBox>
                <DataBoxNav>Contact Details</DataBoxNav>
                    <ErrorText>{errorMessage}</ErrorText>
                <DataWrapper autoComplete="off">
                    <SearchWrapper>
                        <Search
                        onClick={() => console.log("hi")}
                        />
                        <ArrowWrapper onClick={handleSelect}>
                            {showSelect ? <ArrowUp /> : <ArrowDown />}
                        </ArrowWrapper>
                        <SelectWrapper showSelect={showSelect}>
                            {!desktop && <Select
                            showSelect={showSelect}
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
                    {contact.phoneNumbers ? contact.phoneNumbers.map((val, idx) => (
                        <div key={idx}>
                            
                            <SelectMobile
                            
                            onChange={(e) => {
                                updatePhoneNumber(e, idx, "countryCode")
                                handleInput()
                            }}
                            >
                            {countries ? countries.map((val, idxx) => (
                                <option
                                key={idxx}
                                value={val.dialCode}
                                >
                                        {`${val.name} ${val.dialCode}`}
                                    </option>
                            ))
                            : null}
                            </SelectMobile>
  
                            <CountryCode
                            
                            value={val.countryCode || ""}
                            onChange={(e) => {
                                updatePhoneNumber(e, idx, "countryCode")
                                handleInput()
                            }}
                            />
                            <AreaCode
                            value={val.areaCode || ""}
                            onChange={(e) => {
                                updatePhoneNumber(e, idx, "areaCode") 
                                handleInput()
                        }}
                            />
                            <Extension
                            value={val.extension || ""}
                            onChange={(e) => {
                                updatePhoneNumber(e, idx, "extension")
                                handleInput()
                            }}
                            />
                            <PhoneNumber
                            value={val.number || ""}
                            onChange={(e) => {
                                updatePhoneNumber(e, idx, "number") 
                                handleInput()
                            }}
                            />
                    <DeleteIcon 
                        onClick={() =>{
                            deletePhoneNumber(val.id)
                            handleInput()
                        }}
                    />        
                        </div>
                    )) : null}
                    <AddIcon
                        onClick={() => {
                            addPhoneNumber()
                            handleInput()
                        }}
                    />
                </NumbersWrapper>
                <MobileButtonsWrapper>
                    <Buttons />
                </MobileButtonsWrapper>
            </DataBox>
        </>
    )
}

export default ContactDetails