import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { updatePassword } from "../../../../features/profileSlice";
import { changePassword } from "../../../../axios/requestConfig";
import { Label, Input, SmallButton, ErrorText, Visibility } from "../../../../components/ui/StyledComponents";
import {
    PasswordForm,
    Fieldset,
    Legend,
    InputsGroup
} from "../ProfileStyle";



const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [retypePassword, setRetypePassword] = useState("")
    const [errorMessage, setErrorMessage] = useState()

    const dispatch = useDispatch()

    const token = useSelector(state => state.token.token)
    const user = useSelector(state => state.token.user)
    const passwordFromStore = useSelector(state => state.token.password)


    const testButton = (e) => {
        e.preventDefault()
        console.log("test")
        // getToken()
    }

    const buttonChangePassword = (e) => {
        e.preventDefault()
        if (oldPassword !== passwordFromStore) {
                setErrorMessage("Your current password has not been entered correctly")
        } else if (newPassword !== retypePassword) {
            setErrorMessage("New password is not retyped correctly")
        } else if (newPassword.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/)) {
            setErrorMessage("all good")
            dispatch(updatePassword(function() {return changePassword(oldPassword, newPassword)}))
    
            // dispatch(updatePassword({token, user, oldPassword, newPassword}))
        } else {
            setErrorMessage("Password must be at least 8 characters long, containing at least one upper case, one lower case, one numeric and one special character")
        }
    }

    return (
        <>
            <PasswordForm>
                <Fieldset>
                    <Legend>Change Password</Legend>
                    <InputsGroup>
                        <Label> Current password:
                            <Input
                                type="password"
                                value={oldPassword}
                                onChange={e => setOldPassword(e.target.value)}
                            />
                            <Visibility />
                        </Label>
                        <Label> New password:
                            <Input
                                type="password"
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                            />
                            <Visibility />
                        </Label>
                        <Label> Retype new password:
                            <Input
                                type="password"
                                value={retypePassword}
                                onChange={e => setRetypePassword(e.target.value)}
                            />
                            <Visibility />
                        </Label>
                    </InputsGroup>
                    <ErrorText style={{ "textAlign": "center" }}>{errorMessage}</ErrorText>
                    <SmallButton
                        onClick={buttonChangePassword}
                    >Change</SmallButton>
                </Fieldset>
            </PasswordForm>
        </>
    )
}

export default ChangePassword