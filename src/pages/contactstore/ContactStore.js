import { Wrapper, ProfileWrapper, ContactsWrapper } from "./ContactStoreStyle"
import Profile from "./profile/Profile"
import SelectContact from "./selectcontact/SelectContact"
import ContactDetails from "./contactdetails/ContactDetails"
import Buttons from "./buttons/Buttons"

const ContactStore = () => {

    return (
        <Wrapper>
            <ProfileWrapper>
                <Profile />
            </ProfileWrapper>
            <ContactsWrapper>
                <SelectContact />
                <ContactDetails />
                <Buttons />
            </ContactsWrapper>
        </Wrapper>
    )
}

export default ContactStore