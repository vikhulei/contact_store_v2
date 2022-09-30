import styled from "styled-components"

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    top: calc(50% + 5vmin);
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    padding-bottom: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: lightblue;
    @media screen and (max-height: 750px) {
        top: 15vh;
        transform: translate(-50%, 0%);
    }
    @media screen and (max-width: 1350px) {
        top: 15vmin;
        transform: translate(-50%, 0%);
        flex-direction: column-reverse;
        height: 1500px;
        padding-bottom: 250px;
    }
    @media screen and (max-width: 1000px) {
        max-height: 1600px;
        min-height: 1600px;
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