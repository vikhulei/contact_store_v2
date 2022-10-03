import styled from "styled-components"
import { LargeButton } from "../../../../components/ui/StyledComponents"

const ButtonsWrapper = styled.div `
    // width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 1000px) {
        flex-direction: row;
        padding: 0 4%;
        height: 50px;
    }
`

const ProfileButton = styled(LargeButton) `
background-color: #A809CF;
    @media screen and (min-width: 1350px) {
        display: none;
    }
    @media screen and (max-width: 1000px) {
        position: absolute;
        width: 80px;
        left: 50%;
        transform: translate(-50%, 0px);
        &:active {
            transform: translate(-47%, 3px);
        }
    }
`

export {ButtonsWrapper, ProfileButton}