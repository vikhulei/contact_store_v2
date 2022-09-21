import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { emptyContact } from "../../util/emptyContact"
import { SelectList, OptiontWrapper, OptionLabel, OptionButton } from "./SelectStyle"
import { getContacts } from "../../axios/requestConfig"
import { fetchContacts, getContactId, makeSelection } from "../../features/contactSlice"


const Select = ({ handleSelect, showSelect, setShowSelect }) => {

    const [contacts, setContacts] = useState([])

    const dispatch = useDispatch()

    const contactsFromStore = useSelector(state => state.contacts.contacts)
    const selected = useSelector(state => state.contacts.selected)
    const searchValue = useSelector(state => state.contacts.searchValue).toUpperCase()

    const contactsFiltered = contactsFromStore.filter((val) => {
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
            setShowSelect(false)
        }
    }

    useEffect(() => {
        dispatch(fetchContacts(getContacts))
    }, [])

useEffect(() => {
    setContacts(contactsFiltered)
}, [contactsFromStore])

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