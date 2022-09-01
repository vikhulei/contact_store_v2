import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { NavBarWrapper, Title, Logo, SignOut } from "./NavBarStyle"
import logo from "../../assets/logo.png"
import {signOut} from "../../features/getTokenSlice"

const NavBar = () => {
    const token = sessionStorage.getItem("token")
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = () => {
        dispatch(signOut());
        sessionStorage.removeItem("token")
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