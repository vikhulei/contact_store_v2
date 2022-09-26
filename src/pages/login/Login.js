import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchToken, setPassword } from "../../features/getTokenSlice"
import { DataBoxNav, SmallButton, Visibility } from "../../components/ui/StyledComponents"
import { DataBoxLogin, FormLogin, LabelLogin, InputLogin, ErrorTextLogin } from "./LoginStyle"

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
        dispatch(setPassword(inputPassword))
    }

    useEffect(() => {
        if (token) {
            navigate("/contactstore")
        }
    }, [token, navigate])

    return (
        <DataBoxLogin>
            <DataBoxNav>{ }</DataBoxNav>
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
                <ErrorTextLogin>
                    {errorMessage}
                    </ErrorTextLogin>
                <SmallButton onClick={signInButton}>Sign In</SmallButton>
            </FormLogin>
        </DataBoxLogin>
    )
}

export default Login