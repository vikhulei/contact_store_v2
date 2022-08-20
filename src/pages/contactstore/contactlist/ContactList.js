import React, { useState } from "react"
import { DataBox, DataBoxNav, SmallButton } from "../../../components/ui/StyledComponents";
import {
  DataWrapper,
  SearchField,
  SelectList,
  OptionLabel,
  OptionButton,
  OptiontWrapper
} from "./ContactListStyle";
import Contacts from "./Contacts"

const ContactDetails = () => {

  const [cancelled, setCancelled] = useState(false)

  const showSelection = () => {
    setCancelled(false)
  }

  const cancelButton = (e) => {
    e.preventDefault()
    setCancelled(!cancelled)
  }

  return (
    <>
      <DataBox>
        <DataBoxNav>Select Contact</DataBoxNav>
        <DataWrapper>
          <SearchField type="text" placeholder="type your text" />
            <SelectList onClick={showSelection}>
              {Contacts.map((val, ind) => {
                return <OptiontWrapper key={ind}
                >
                <OptionButton type="radio" 
                name="contacts" id={val.id}
                cancelled={cancelled}
                 />
                <OptionLabel>
                    {val.contactName}
                  </OptionLabel>
                  </OptiontWrapper>
              })}
            </SelectList>
            <SmallButton onClick={cancelButton}>Cancel</SmallButton>
        </DataWrapper>
      </DataBox>
    </>
  );
};

export default ContactDetails;
