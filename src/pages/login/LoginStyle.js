import styled from "styled-components"
import {DataBox, Label, Input, ErrorText, SmallButton } from "../../components/ui/StyledComponents"


const DataBoxLogin = styled(DataBox) `
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    height: 350px;
`
const FormLogin = styled.form `
    position: relative;
    top: 35px;
    width: 100%;
    height: 170px;
    padding: 30px 20px;
    text-align: center;
`

const LabelLogin = styled(Label) `
    width: 100%;
    margin-bottom: 10px;
    font-size: min(1.2rem, 4.5vw);
`

const InputLogin = styled(Input) `
    width: 50vw;
    // max-width: 210px;
`
const ButtonLogin = styled(SmallButton) `
    margin-top: 20px;
`

const ErrorTextLogin = styled(ErrorText) `
    margin-top: 40px;
`

export {DataBoxLogin, FormLogin, LabelLogin, InputLogin, ButtonLogin, ErrorTextLogin}