import { useSelector, useDispatch } from "react-redux"
import { NavBarWrapper, Title, Logo, SignOut } from "./NavBarStyle"
import logo from "../../assets/logo.png"
import {signOut} from "../../features/auth/authSlice"

const NavBar = () => {
    const auth = useSelector(state => state.authorization.auth)
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(signOut());
    }

    return (
        <NavBarWrapper>
            <Logo src={logo} alt="logo" />
            <Title>Contact Store</Title>
            {auth ? <SignOut onClick={logOut}>Sign Out</SignOut> : null}
        </NavBarWrapper>
    )
}

export default NavBar