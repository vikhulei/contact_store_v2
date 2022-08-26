import styled from "styled-components"

const NavBarWrapper = styled.div `
position: fixed;
width: 100%;
height: 80px;
background-color: #F5EAFB;
display: grid;
grid-template-columns: 1fr 50% 1fr;
align-items: center;
// display: flex;
// justify-content: space-between;
// align-items: center;
padding-left: min(30px, 1vw);
padding-right: min(30px, 3vw);
z-index: 99;
`

const Logo = styled.img `
    width: 10vw;
    max-width: 70px;
`

const Title = styled.div `
    // height: 100%;
    // font-family: "Rock Salt";
    font-size: min(3.5rem, 6vw);
    color: #450577;
    justify-self: center;
    // background-color: red;

`
const SignOut = styled.p `
    text-decoration: none;
    font-size: min(1.2rem, 3vw);
    font-weight: bold;
    text-shadow: grey 1px 1px 10px;
    justify-self: right;
    &:active {
        color: darkblue;
        transform: translate(1px, 1px);
    }
`

    export {NavBarWrapper, Title, Logo, SignOut}