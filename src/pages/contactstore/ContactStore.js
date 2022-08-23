import { Wrapper, ProfileWrapper, ContactsWrapper } from "./ContactStoreStyle"
import Profile from "./profile/Profile"
import ContactList from "./contactlist/ContactList"
import ContactDetails from "./contactdetails/ContactDetails"
import Buttons from "./buttons/Buttons"

const ContactStore = () => {

    return (
        <Wrapper>
            <ProfileWrapper>
                <Profile />
            </ProfileWrapper>
            <ContactsWrapper>
                <ContactList />
                <ContactDetails />
                <Buttons />
            </ContactsWrapper>
        </Wrapper>
    )
}

export default ContactStore