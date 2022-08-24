import React, { useState, useEffect, useRef } from "react"
import { DataBox, DataBoxNav } from "../../../components/ui/StyledComponents";
import {
  Wrapper,
  DataWrapper,
  SelectWrapper,
  ErrorTextSelect
} from "./SelectContactStyle";
import Select from "../../../components/select/Select"
import Search from "../../../components/search/Search"

const SelectContact = () => {

  const [cancelled, setCancelled] = useState(false)
  const refTarget = useRef(false)

  const showSelection = () => {
    setCancelled(false)
  }

  const cancelButton = (e) => {
    e.preventDefault()
    setCancelled(!cancelled)
  }

  const clickOutside = (e) => {
    if (e.target.className !== refTarget.current.className) {
      setCancelled(!cancelled)
    }
  }


  const handleDoubleClick = () => {
    //  alert("hello")
  }

  useEffect(() => {
    window.addEventListener("click", clickOutside)
    return () => window.removeEventListener("click", clickOutside)
  }, [window])

  return (
    <Wrapper>
      <DataBox>
        <DataBoxNav
        >Select Contact</DataBoxNav>
        <DataWrapper>
          {/* <SearchField type="text" placeholder="type your text" /> */}
          <Search />
          <SelectWrapper>
            <Select
              showSelection={showSelection}
              cancelled={cancelled}
              refTarget={refTarget}
              handleDoubleClick={handleDoubleClick}
            />
          </SelectWrapper>
          {/* <SelectList
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
            </SelectList> */}
        </DataWrapper>
        <ErrorTextSelect>Data was not loaded</ErrorTextSelect>
      </DataBox>
    </Wrapper>
  );
};

export default SelectContact;
