import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { login } from "../../axios/requestConfig"
import { fetchToken, getTokenError, setPassword } from "../../features/getTokenSlice"
import { DataBoxNav, SmallButton, Visibility } from "../../components/ui/StyledComponents"
import { DataBoxLogin, FormLogin, LabelLogin, InputLogin, ErrorTextLogin } from "./LoginStyle"

const Login = () => {

    const [visibility, setVisibility] = useState(false)
    const [inputUsername, setInputUsername] = useState("user3@intrinsicgrouplimited.com")
    const [inputPassword, setInputPassword] = useState("")

    const tokenError = useSelector(getTokenError)
    const token = useSelector(state => state.token.token)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const signInButton = (e) => {
        e.preventDefault()
        dispatch(setPassword(inputPassword))
        dispatch(fetchToken(function() {return login({username: inputUsername, password: inputPassword})}))
    }

    useEffect(() => {
        if (token) {
            navigate("/contactstore")
        }
    }, [token])

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
                <ErrorTextLogin>{tokenError}</ErrorTextLogin>
                <SmallButton onClick={signInButton}>Sign In</SmallButton>
            </FormLogin>
        </DataBoxLogin>
    )
}

export default Login