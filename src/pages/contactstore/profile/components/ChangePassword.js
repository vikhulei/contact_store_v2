import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { updatePassword } from "../../../../features/profileSlice";
import { changePassword } from "../../../../axios/requestConfig";
import { Label, Input, SmallButton, ErrorText, Visibility } from "../../../../components/ui/StyledComponents";
import {
    PasswordForm,
    Fieldset,
    Legend,
    InputsGroup,
    ErrorTextPassword
} from "../ProfileStyle";



const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [retypePassword, setRetypePassword] = useState("")
    const [errorMessage, setErrorMessage] = useState()
    const [visibility, setVisibility] = useState({
        old: false,
        new: false,
        retype: false,
    })

    const dispatch = useDispatch()

    const passwordFromStore = sessionStorage.getItem("psw")
    const errorProfilePassword = useSelector(state => state.profile.errorProfilePassword)

    const buttonChangePassword = (e) => {
        console.log("here")
        e.preventDefault()
        if (oldPassword !== passwordFromStore) {
                setErrorMessage("Your current password has not been entered correctly")
        } else if (newPassword !== retypePassword) {
            setErrorMessage("New password is not retyped correctly")
        } else if (newPassword.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/)) {
            dispatch(updatePassword({oldPassword, newPassword}))
            setOldPassword("")
            setNewPassword("")
            setRetypePassword("")
            setErrorMessage(errorProfilePassword)
            // dispatch(updatePassword(function() {return changePassword(oldPassword, newPassword)}))
        } else {
            setErrorMessage("Password must be at least 8 characters long, containing at least one upper case, one lower case, one numeric and one special character")
        }
    }

    useEffect(() => {
        setErrorMessage(errorProfilePassword)
    }, [errorProfilePassword])

    return (
        <>
            <PasswordForm>
                <Fieldset>
                    <Legend>Change Password</Legend>
                    <InputsGroup>
                        <Label> Current password:
                            <Input
                                type={visibility.old ? "text" :"password"}
                                value={oldPassword}
                                onChange={e => setOldPassword(e.target.value)}
                            />
                            <Visibility onClick={() => setVisibility(prev => ({...prev, old: !visibility.old}))} />
                        </Label>
                        <Label> New password:
                            <Input
                                type={visibility.new ? "text" :"password"}
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                            />
                            <Visibility onClick={() => setVisibility(prev => ({...prev, new: !visibility.new}))} />
                        </Label>
                        <Label> Retype new password:
                            <Input
                                type={visibility.retype ? "text" :"password"}
                                value={retypePassword}
                                onChange={e => setRetypePassword(e.target.value)}
                            />
                            <Visibility onClick={() => setVisibility(prev => ({...prev, retype: !visibility.retype}))} />
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