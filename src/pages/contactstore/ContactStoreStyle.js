import styled from "styled-components"

const Wrapper = styled.div`
    position: absolute;
    top: calc(50% + 5vmin);
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    padding-bottom: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-height: 750px) {
        // background-color: lightblue;
        top: 15vh;
        transform: translate(-50%, 0%);
    }
    @media screen and (max-width: 1350px) {
        flex-direction: column-reverse;
        height: 1500px;
        padding-bottom: 10%;
    }
    @media screen and (max-width: 1000px) {
        top: 15vmin;
        max-height: 1350px;
        min-height: 1350px;
    }
`

const ProfileWrapper = styled.div `
min-width: 30%;
`

const ContactsWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
// background-color: blue;
@media screen and (max-width: 1000px) {
    width: auto;
}
// @media screen and (max-width: 1350px) {
//     width: 80vw;
// }

`
const ButtonsWrapper = styled.div `
    @media screen and (max-width: 1000px) {
        display: none;
    }
`

export { Wrapper, ProfileWrapper, ContactsWrapper, ButtonsWrapper }