import { useSelector } from "react-redux"
import {NavBarWrapper, Title, Logo, SignOut} from "./NavBarStyle"
import logo from "../../assets/logo.png"

const NavBar = () => {
const auth = useSelector(state => state.authorization.auth)
    return (
        <NavBarWrapper>
            <Logo src={logo} alt="logo"/>
            <Title>Contact Store</Title>
            {auth ? <SignOut href="#">Sign Out</SignOut> : null}
        </NavBarWrapper>
    )
}

export default NavBar