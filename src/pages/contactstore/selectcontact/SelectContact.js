import { useState, useEffect } from "react"
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

  // const [desktop, setDesktop] = useState(
  //   window.innerWidth > 1000 ? true : false
  // )

  // const checkForDesktop = () => {
  //   if (window.innerWidth > 1000) {
  //     setDesktop(true)
  //   } else {
  //     setDesktop(false)
  //   }
  // }

  // useEffect(() => {
  //   checkForDesktop()
  //   window.addEventListener("resize", checkForDesktop)
  //   return () => { window.removeEventListener("resize", checkForDesktop) }
  // }, [])

  // useEffect(() => {
  //   console.log(desktop)
  // }, [desktop])


  return (
    <Wrapper>
      <DataBox>
        <DataBoxNav
        >Select Contact</DataBoxNav>
        <DataWrapper>
          <Search />
          <SelectWrapper>
            {desktop && <Select
            // handleDoubleClick={handleDoubleClick}
            />}
          </SelectWrapper>
        </DataWrapper>
        <ErrorTextSelect>Data was not loaded</ErrorTextSelect>
      </DataBox>
    </Wrapper>
  );
};

export default SelectContact;
