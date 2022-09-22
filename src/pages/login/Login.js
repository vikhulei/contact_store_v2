import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { login } from "../../axios/requestConfig"
import { fetchToken, getTokenError } from "../../features/getTokenSlice"
import { getCountryCodesThunk } from "../../features/contactSlice"
import { DataBoxNav, SmallButton, Visibility } from "../../components/ui/StyledComponents"
import { DataBoxLogin, FormLogin, LabelLogin, InputLogin, ErrorTextLogin } from "./LoginStyle"

const Login = () => {

    const [visibility, setVisibility] = useState(false)
    const [inputUsername, setInputUsername] = useState("user3@intrinsicgrouplimited.com")
    const [inputPassword, setInputPassword] = useState("")

    const tokenError = useSelector(getTokenError)
    const token = useSelector(state => state.token.token)
    const errorMessage = useSelector(state => state.token.errorMessage)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const signInButton = (e) => {
        e.preventDefault()
        dispatch(fetchToken({username: inputUsername, password: inputPassword}))
        dispatch(getCountryCodesThunk())
        console.log(errorMessage)

    }
    // const signInButton = (e) => {
    //     e.preventDefault()
    //     dispatch(fetchToken(function() {return login({username: inputUsername, password: inputPassword})}))
    //     dispatch(getCountryCodesThunk())
    //     // console.log(tokenError)
    // }

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