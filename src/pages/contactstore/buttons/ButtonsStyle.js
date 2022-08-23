import styled from "styled-components"
import { LargeButton } from "../../../components/ui/StyledComponents"

const ButtonsWrapper = styled.div `
    // width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // background-color: lightgreen;
    @media screen and (max-width: 1000px) {
        display: none;
    }
`

const ProfileButton = styled(LargeButton) `
background-color: #A809CF;
    @media screen and (min-width: 1350px) {
        display: none;
    }
`

export {ButtonsWrapper, ProfileButton}


// @media screen and (max-width: 1050px) {
//     // background-color: rgba(80,80,80,0.8);
//     position: sticky;
//     width: 100vw;
//     max-width: 350px;
//     height: 60px;
//     flex-direction: row;
//     justify-content: space-around;
//     bottom: 20px;
//     margin-top: -150px;
// }