import styled from "styled-components"

const NavBarWrapper = styled.div `
    position: fixed;
    width: 100%;
    height: 9vmin;
    max-height: 80px;
    background-color: #F5EAFB;
    display: grid;
    grid-template-columns: 1fr 50% 1fr;
    align-items: center;
    padding-left: min(30px, 1vw);
    padding-right: min(30px, 3vw);
    z-index: 99;
`

const Logo = styled.img `
    width: 10vmin;
    max-width: 70px;
`

const Title = styled.h1 `
    // font-size: min(3.5rem, 6vw);
    font-size: 6vmin;
    font-weight: bold;
    color: #450577;
    justify-self: center;

`
const SignOut = styled.p `
    text-decoration: none;
    color: #450577;
    font-size: min(1.2rem, 4vmin);
    font-weight: bold;
    text-shadow: grey 1px 1px 10px;
    justify-self: right;
    &:active {
        color: darkblue;
        transform: translate(1px, 1px);
    }
    &:hover {
        cursor: pointer;
    }
`

    export {NavBarWrapper, Title, Logo, SignOut}