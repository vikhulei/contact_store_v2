import {NavBarWrapper, Title, Logo, SignOut} from "./NavBarStyle"
import logo from "../../assets/logo.png"

const NavBar = () => {
    return (
        <NavBarWrapper>
            <Logo src={logo} alt="logo" />
            <Title>Contact Store</Title>
            <SignOut href="#">Sign Out</SignOut>
        </NavBarWrapper>
    )
}

export default NavBar