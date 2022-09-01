import { useSelector, useDispatch } from "react-redux"
import { fetchProfileData } from "../../features/profileSlice";
import { useEffect } from "react";
import { Wrapper, ProfileWrapper, ContactsWrapper, ButtonsWrapper } from "./ContactStoreStyle"
import Profile from "./profile/Profile"
import SelectContact from "./selectcontact/SelectContact"
import ContactDetails from "./contactdetails/ContactDetails"
import Buttons from "./buttons/Buttons"

const ContactStore = () => {

    const dispatch = useDispatch()

    const profile = useSelector(state => state.profileData.profileData)

    const refreshWindow = function() {
        if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }

    useEffect(() => {
        dispatch(fetchProfileData())
        if(Object.keys(profile).length === 0 ) {
            refreshWindow()
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