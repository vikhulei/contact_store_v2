import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { DataBox, DataBoxNav, Label, Input } from "../../../components/ui/StyledComponents"
import { DataWrapper, SearchWrapper, SelectWrapper, DetailsLabel, DetailsInput, NumbersWrapper, CountryCode, AreaCode, Extension, PhoneNumber, ArrowWrapper, ArrowDown, ArrowUp, MobileButtonsWrapper } from "./ContactDetailsStyle"
import Search from "../../../components/search/Search"
import Select from "../../../components/select/Select"
import Buttons from "../buttons/Buttons"
// import { ButtonsWrapper } from "../buttons/ButtonsStyle"

const ContactDetails = () => {

    const [showSelect, setShowSelect] = useState(false)
    // const [contactdetails, setcontactdetails] = useState({})

    const contact = useSelector(state => state.contact.contact)

    const {contactName, company, primaryEmailAddress} = contact
    
    // const contname = cName

    const handleSelect = () => {
        setShowSelect(!showSelect)
    }
    
    // useEffect(() => {
    //     if(contact) {
    //     //     setcontactdetails(contact)
    //         // console.log(contact)
    //     }
    // }, [contact])

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
                        {showSelect && <Select 
                            handleSelect={handleSelect}
                            />}
                        </SelectWrapper>
                    </SearchWrapper>
                    <DetailsLabel>
                        Name:
                        <DetailsInput
                        value={contactName ? contactName : ""}
                        // readonly
                        onChange={e => e.target.value}
                        />
                    </DetailsLabel>
                    <DetailsLabel>
                        Company:
                        <DetailsInput
                        value={company ? company : ""}
                        // readonly
                        onChange={e => e.target.value}
                        />
                    </DetailsLabel>
                    <DetailsLabel>
                        Email:
                        <DetailsInput
                        value={primaryEmailAddress ? primaryEmailAddress : ""}
                        // readonly
                        onChange={e => e.target.value}
                        />
                    </DetailsLabel>
                    <DetailsLabel>Phone numbers:</DetailsLabel>
                </DataWrapper>
                <NumbersWrapper>
                    <CountryCode />
                    <AreaCode />
                    <Extension />
                    <PhoneNumber />
                </NumbersWrapper>
                <MobileButtonsWrapper>
                <Buttons/>
                </MobileButtonsWrapper>
            </DataBox>
        </>
    )
}

export default ContactDetails