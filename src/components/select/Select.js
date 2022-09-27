import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { emptyContact } from "../../util/emptyContact"
import { SelectList, OptiontWrapper, OptionLabel, OptionButton } from "./SelectStyle"
import { getContacts } from "../../axios/requestConfig"
import { fetchContacts, getContactId, makeSelection, getCountryCodesThunk } from "../../features/contactSlice"


const Select = ({ handleSelect, showSelect, showSelectList }) => {

    const dispatch = useDispatch()

    const contactsFromStore = useSelector(state => state.contacts.contacts)
    const selected = useSelector(state => state.contacts.selected)
    const searchValue = useSelector(state => state.contacts.searchValue).toUpperCase()

    const contacts = contactsFromStore.filter((val) => {
        return val.contactName.toUpperCase().includes(searchValue) ||
            val.company.toUpperCase().includes(searchValue) ||
            val.primaryEmailAddress.toUpperCase().includes(searchValue) ||
            val.phoneNumbers.some((vall) => vall.phoneNumberFormatted.toUpperCase().includes(searchValue))
    })


    const select = () => {
        dispatch(makeSelection())
    }

    const getId = (e) => {
        dispatch(getContactId(e.target.id))
        if(showSelect) {
            handleSelect()
        }
    }

    useEffect(() => {
        dispatch(fetchContacts())
        dispatch(getCountryCodesThunk())
    }, [])

    return (
        <SelectList
            onClick={select}
        >
            {contacts?.map((val) => {
                return <OptiontWrapper
                    key={val.id}
                >
                    <OptionButton type="radio"
                        name="contacts" id={val.id}
                        selected={selected}
                        className="optionbutton"
                        onClick={getId}
                    />
                    <OptionLabel
                    >
                        {val.contactName}
                    </OptionLabel>
                </OptiontWrapper>
            })}
        </SelectList>

    )
}

export default Select