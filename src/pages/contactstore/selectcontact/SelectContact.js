import { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import useWindowWidth from "../../../util/useWindowWidth" 
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

const [desktop] = useWindowWidth()

  return (
    <Wrapper>
      <DataBox>
        <DataBoxNav
        >Select Contact</DataBoxNav>
        <DataWrapper>
          <Search />
          <SelectWrapper>
            {desktop && <Select
            />}
          </SelectWrapper>
        </DataWrapper>
      </DataBox>
    </Wrapper>
  );
};

export default SelectContact;
