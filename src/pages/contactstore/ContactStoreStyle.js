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
        top: 5vh;
        height: 2150px;
    }
`

const ProfileWrapper = styled.div ``

const ContactsWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
@media screen and (max-width: 1000px) {
    flex-direction: column;
    height: 1500px;
}
`

export { Wrapper, ProfileWrapper, ContactsWrapper }