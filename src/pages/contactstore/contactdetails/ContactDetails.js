import {DataBox, DataBoxNav, Label, Input} from "../../../components/ui/StyledComponents"
import {DataWrapper, DetailsLabel, DetailsInput, NumbersWrapper, CountryCode, AreaCode, Extension, PhoneNumber} from "./ContactDetailsStyle"
import Search from "../../../components/search/Search"

const ContactDetails = () => {
    return (
        <>
            <DataBox>
                <DataBoxNav>Contact Details</DataBoxNav>
                <DataWrapper autoComplete="off">
                    <Search/>
                    <DetailsLabel>
                        Name:
                        <DetailsInput/>
                    </DetailsLabel>
                    <DetailsLabel>
                        Company:
                        <DetailsInput/>
                    </DetailsLabel>
                    <DetailsLabel>
                        Email:
                        <DetailsInput/>
                    </DetailsLabel>
                    <DetailsLabel>Phone numbers:</DetailsLabel>
                </DataWrapper>
                <NumbersWrapper>
                <CountryCode/>
                <AreaCode/>
                <Extension/>
                <PhoneNumber/>
                </NumbersWrapper>
            </DataBox>
        </>
    )
}

export default ContactDetails