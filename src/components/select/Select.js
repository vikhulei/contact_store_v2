import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import { SelectList, OptiontWrapper, OptionLabel, OptionButton } from "./SelectStyle"
import Contacts from "./Contacts"
import { getContacts } from "../../axios/requestConfig"
import {fetchContacts, selectContact} from "../../features/contactSlice"


const Select = ({ showSelection, cancelled, refTarget, handleDoubleClick }) => {
    
    const dispatch = useDispatch()
    
    const contacts = useSelector(state => state.contact.contacts)

    const testButton = (e) => {
        const contact = contacts.filter(value => value.id === e.target.id)[0]
        dispatch(selectContact(contact))
    }

    useEffect(() => {
        dispatch(fetchContacts(getContacts))
    }, [])

    // useEffect(() => {
    //     console.log(contactss)
    // }, [contactss])

    return (
        <SelectList
            onClick={showSelection}
        >
            {contacts.map((val, ind) => {
                return <OptiontWrapper
                    key={val.id}
                >
                    <OptionButton type="radio"
                        name="contacts" id={val.id}
                        cancelled={cancelled}
                        ref={refTarget}
                        className="optionbutton"
                        onDoubleClick={handleDoubleClick}
                        onClick={testButton}
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