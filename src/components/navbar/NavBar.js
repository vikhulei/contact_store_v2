import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { NavBarWrapper, Title, Logo, SignOut } from "./NavBarStyle"
import logo from "../../assets/logo.png"
import {clearToken} from "../../features/getTokenSlice"
import { clearProfile } from "../../features/profileSlice"
import { clearContacts } from "../../features/contactSlice"

const NavBar = () => {
    const token = sessionStorage.getItem("token")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = () => {
        dispatch(clearToken());
        dispatch(clearProfile());
        dispatch(clearContacts());
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("username")
        sessionStorage.removeItem("psw")
        navigate("/")
    }

    return (
        <NavBarWrapper>
            <Logo src={logo} alt="logo" />
            <Title>Contact Store</Title>
            {token ? <SignOut onClick={logOut}>Sign Out</SignOut> : null}
        </NavBarWrapper>
    )
}

export default NavBar