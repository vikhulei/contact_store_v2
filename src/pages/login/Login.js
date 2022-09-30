import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchToken, setPassword } from "../../features/getTokenSlice"
import { DataBoxNav, Visibility } from "../../components/ui/StyledComponents"
import { DataBoxLogin, FormLogin, LabelLogin, InputLogin, ErrorTextLogin, ButtonLogin } from "./LoginStyle"

const Login = () => {

    const [visibility, setVisibility] = useState(false)
    const [inputUsername, setInputUsername] = useState("user3@intrinsicgrouplimited.com")
    const [inputPassword, setInputPassword] = useState("")

    const token = useSelector(state => state.token.token)
    const errorMessage = useSelector(state => state.token.errorMessage)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const signInButton = (e) => {
        e.preventDefault()
        dispatch(fetchToken({username: inputUsername, password: inputPassword}))
        sessionStorage.setItem("psw", inputPassword)
    }

    useEffect(() => {
        if (token) {
            navigate("/contactstore")
        }
    }, [token, navigate])


    return (
        <DataBoxLogin>
            <DataBoxNav>Log In</DataBoxNav>
            <FormLogin autoComplete="off">
                <LabelLogin htmlFor="username">Username:
                    <InputLogin
                        type="text"
                        id="username"
                        value={inputUsername}
                        onChange={(e) => setInputUsername(e.target.value)}
                    />
                </LabelLogin>
                <LabelLogin htmlFor="password">Password:
                    <InputLogin
                        type={visibility ? "text" : "password"}
                        id="password"
                        value={inputPassword}
                        onChange={(e) => setInputPassword(e.target.value)}
                    />
                    <Visibility onClick={(() => setVisibility(!visibility))} />
                </LabelLogin>
                <ButtonLogin onClick={signInButton}>Sign In</ButtonLogin>
            </FormLogin>
                <ErrorTextLogin>
                    {errorMessage}
                    </ErrorTextLogin>
        </DataBoxLogin>
    )
}

export default Login