import React, { useState, useEffect, useRef } from "react"
import { useDispatch } from "react-redux";
import { DataBox, DataBoxNav } from "../../../components/ui/StyledComponents";
import {
  Wrapper,
  DataWrapper,
  SelectWrapper,
  ErrorTextSelect
} from "./SelectContactStyle";
import Select from "../../../components/select/Select"
import Search from "../../../components/search/Search"
import { resetContact } from "../../../features/contactSlice";

const SelectContact = () => {

  const [cancelled, setCancelled] = useState(false)
  const refTarget = useRef(false)
  const dispatch = useDispatch()

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
      dispatch(resetContact())
    }
  }


  const handleDoubleClick = () => {
     alert("hello")
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
        </DataWrapper>
        <ErrorTextSelect>Data was not loaded</ErrorTextSelect>
      </DataBox>
    </Wrapper>
  );
};

export default SelectContact;
