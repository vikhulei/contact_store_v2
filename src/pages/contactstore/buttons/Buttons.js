import { useState } from "react"
import { LargeButton } from "../../../components/ui/StyledComponents"
import { ButtonsWrapper, ProfileButton } from "./ButtonsStyle"

const Buttons = () => {
    const [showButtonsWrapper, setShowButtonsWrapper] = useState({
        first: true,
        second: false,
        third: false
    })

    const profileButton = () => {
        console.log(sessionStorage.getItem('token'))
    }

    return (
        <>
        {showButtonsWrapper.first && <ButtonsWrapper>
            <LargeButton disabled={false}>Add</LargeButton>
            <ProfileButton onClick={profileButton}>Profile</ProfileButton>
            <LargeButton disabled={false}>Cancel</LargeButton>
        </ButtonsWrapper>}
        {showButtonsWrapper.second && <ButtonsWrapper>
            <LargeButton disabled={false}>Delete</LargeButton>
            <ProfileButton>Profile</ProfileButton>
            <LargeButton disabled={false}>Cancel</LargeButton>
        </ButtonsWrapper>}
        {showButtonsWrapper.third && <ButtonsWrapper>
            <LargeButton disabled={false}>Update</LargeButton>
            <ProfileButton>Profile</ProfileButton>
            <LargeButton disabled={false}>Cancel</LargeButton>
        </ButtonsWrapper>}
        </>
    )
}

export default Buttons