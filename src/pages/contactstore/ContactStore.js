import { useSelector, useDispatch } from "react-redux"
import { fetchProfileData, fetchProfileImage } from "../../features/profileSlice";
import { useEffect } from "react";
import { Wrapper, ProfileWrapper, ContactsWrapper, ButtonsWrapper } from "./ContactStoreStyle"
import Profile from "./profile/Profile"
import SelectContact from "./selectcontact/SelectContact"
import ContactDetails from "./contactdetails/ContactDetails"
import Buttons from "./buttons/Buttons"

const ContactStore = () => {

    const dispatch = useDispatch()

    const profile = useSelector(state => state.profile.profileData)

    const refreshWindow = function() {
        if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }

    useEffect(() => {
        if(Object.keys(profile).length === 0 ) {
            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }
            }
     }, [])

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
        </Wrapper>
    )
}

export default ContactStore