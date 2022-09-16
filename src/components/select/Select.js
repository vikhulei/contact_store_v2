import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import { SelectList, OptiontWrapper, OptionLabel, OptionButton } from "./SelectStyle"
import { getContacts } from "../../axios/requestConfig"
import { fetchContacts, getContactId, makeSelection, showDeleteButton, enableButton, disableButton } from "../../features/contactSlice"


const Select = ({handleDoubleClick }) => {
    
    const dispatch = useDispatch()
    
    const contactsFromStore = useSelector(state => state.contacts.contacts)

    const contacts = contactsFromStore.filter(val => val = Object.values(val).includes("Viktor"))

    const selected = useSelector(state => state.contacts.selected)

    const firstButton = useSelector(state => state.contacts.firstButton)

    const select = () => {
        dispatch(makeSelection())
      }

    const getId = (e) => {
        // const contact = contacts.filter(value => value.id === e.target.id)[0]
        // dispatch(selectContact(contact))
        dispatch(getContactId(e.target.id))
        // dispatch(disableButton())
    }

    useEffect(() => {
        dispatch(fetchContacts(getContacts))

    }, [contactsFromStore])

    return (
        <SelectList
            onClick={select}
        >
            {contactsFromStore.map((val, ind) => {
                return <OptiontWrapper
                    key={val.id}
                >
                    <OptionButton type="radio"
                        name="contacts" id={val.id}
                        selected={selected}
                        className="optionbutton"
                        onDoubleClick={handleDoubleClick}
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