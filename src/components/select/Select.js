import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import { SelectList, OptiontWrapper, OptionLabel, OptionButton } from "./SelectStyle"
import { getContacts } from "../../axios/requestConfig"
// import {fetchContacts, selectContact, getContactId} from "../../features/contactSlice"
import { fetchContacts, selectContact, getContactId, makeSelection, showDeleteButton, enableButton, disableButton } from "../../features/contactSlice"


const Select = ({handleDoubleClick }) => {
    
    const dispatch = useDispatch()
    
    const contacts = useSelector(state => state.contacts.contacts)

    const selected = useSelector(state => state.contacts.selected)

    const firstButton = useSelector(state => state.contacts.firstButton)

    const select = () => {
        dispatch(makeSelection())
      }

    const getId = (e) => {
        const contact = contacts.filter(value => value.id === e.target.id)[0]
        dispatch(selectContact(contact))
        dispatch(getContactId(e.target.id))
        // dispatch(disableButton())
    }

    useEffect(() => {
        dispatch(fetchContacts(getContacts))

    }, [contacts])

    return (
        <SelectList
            onClick={select}
        >
            {contacts.map((val, ind) => {
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