import { Wrapper, ProfileWrapper, ContactsWrapper, ButtonsWrapper } from "./ContactStoreStyle"
import Profile from "./profile/Profile"
import SelectContact from "./selectcontact/SelectContact"
import ContactDetails from "./contactdetails/ContactDetails"
import Buttons from "./buttons/Buttons"
import Footer from "../../components/footer/Footer"


const ContactStore = () => {
 
    return (
        <Wrapper>
            <ProfileWrapper>
                <Profile />
            </ProfileWrapper>
            <ContactsWrapper>
                <SelectContact />
                <ContactDetails />
                <ButtonsWrapper>
                    <Buttons />
                </ButtonsWrapper>
            </ContactsWrapper>
            <Footer />
        </Wrapper>
    )
}

export default ContactStore