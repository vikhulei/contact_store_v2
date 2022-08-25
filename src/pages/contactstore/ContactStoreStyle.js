import styled from "styled-components"

const Wrapper = styled.div`
    position: absolute;
    top: 20vh;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: lightblue;
    @media screen and (max-width: 1350px) {
        flex-direction: column-reverse;
        height: 1500px;
        padding-bottom: 10%;
    }
    @media screen and (max-width: 1000px) {
        top: 15vh;
        max-height: 1350px;
        min-height: 1350px;
    }
`

const ProfileWrapper = styled.div ``

const ContactsWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
// @media screen and (max-width: 1000px) {
//     flex-direction: column;
//     min-height: 1000px;
// }

`
const ButtonsWrapper = styled.div `
    @media screen and (max-width: 1000px) {
        display: none;
    }
`

export { Wrapper, ProfileWrapper, ContactsWrapper, ButtonsWrapper }