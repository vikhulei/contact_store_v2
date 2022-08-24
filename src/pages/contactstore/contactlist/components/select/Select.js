import { SelectList, OptiontWrapper, OptionLabel, OptionButton } from "./SelectStyle"
import Contacts from "./Contacts"


const Select = ({ showSelection, cancelled, refTarget, handleDoubleClick }) => {
    return (

        <SelectList
            onClick={showSelection}
        >
            {Contacts.map((val, ind) => {
                return <OptiontWrapper
                    key={val.id}
                >
                    <OptionButton type="radio"
                        name="contacts" id={val.id}
                        cancelled={cancelled}
                        ref={refTarget}
                        className="optionbutton"
                        onDoubleClick={handleDoubleClick}
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