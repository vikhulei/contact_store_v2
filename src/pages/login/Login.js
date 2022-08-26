import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import { signIn } from "../../features/auth/authSlice"

import { DataBoxNav, SmallButton, Visibility } from "../../components/ui/StyledComponents"
import { DataBoxLogin, FormLogin, LabelLogin, InputLogin, ErrorTextLogin} from "./LoginStyle"

const Login = () => {

    const [visibility, setVisibility] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const auth = useSelector((state) => state.authorization.auth)

    const dispatch = useDispatch()

    const navigate = useNavigate()


    const signInButton = (e) => {
        e.preventDefault()
        if(username==="123") {
            dispatch(signIn())
            navigate("/contactstore")
        }
    }

    return (
        <DataBoxLogin>
            <DataBoxNav>{auth}</DataBoxNav>
            <FormLogin autoComplete="off">
                <LabelLogin htmlFor="username">Username:
                    <InputLogin
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </LabelLogin>
                <LabelLogin htmlFor="password">Password:
                    <InputLogin
                    type={visibility ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Visibility onClick={(() => setVisibility(!visibility))}/>
                </LabelLogin>
                <ErrorTextLogin>Your username or password is not correct</ErrorTextLogin>
                <SmallButton onClick={signInButton}>Sign In</SmallButton>
            </FormLogin>
        </DataBoxLogin>
    )
}

export default Login