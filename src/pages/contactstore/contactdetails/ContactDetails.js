import { useState } from "react"
import { DataBox, DataBoxNav, Label, Input } from "../../../components/ui/StyledComponents"
import { DataWrapper, SearchWrapper, SelectWrapper, DetailsLabel, DetailsInput, NumbersWrapper, CountryCode, AreaCode, Extension, PhoneNumber, ArrowWrapper, ArrowDown, ArrowUp } from "./ContactDetailsStyle"
import Search from "../../../components/search/Search"
import Select from "../../../components/select/Select"

const ContactDetails = () => {

    const [showSelect, setShowSelect] = useState(false)

    const handleSelect = () => {
        setShowSelect(!showSelect)
    }

    return (
        <>
            <DataBox>
                <DataBoxNav>Contact Details</DataBoxNav>
                <DataWrapper autoComplete="off">
                    <SearchWrapper>
                        <Search />
                        <ArrowWrapper onClick={handleSelect}>
                        {showSelect ? <ArrowUp/> : <ArrowDown/>}
                        </ArrowWrapper>
                        <SelectWrapper showSelect={showSelect}>
                            <Select 
                            handleSelect={handleSelect}
                            />
                        </SelectWrapper>
                    </SearchWrapper>
                    <DetailsLabel>
                        Name:
                        <DetailsInput />
                    </DetailsLabel>
                    <DetailsLabel>
                        Company:
                        <DetailsInput />
                    </DetailsLabel>
                    <DetailsLabel>
                        Email:
                        <DetailsInput />
                    </DetailsLabel>
                    <DetailsLabel>Phone numbers:</DetailsLabel>
                </DataWrapper>
                <NumbersWrapper>
                    <CountryCode />
                    <AreaCode />
                    <Extension />
                    <PhoneNumber />
                </NumbersWrapper>
            </DataBox>
        </>
    )
}

export default ContactDetails