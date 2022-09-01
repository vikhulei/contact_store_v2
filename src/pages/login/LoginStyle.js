import styled from "styled-components"
import {DataBox, Label, Input, ErrorText } from "../../components/ui/StyledComponents"


const DataBoxLogin = styled(DataBox) `
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    height: 350px;
`
const FormLogin = styled.form `
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    text-align: center;

`

const LabelLogin = styled(Label) `
    // position: relative;
    width: 100%;
    margin-bottom: 10px;
    font-size: min(1.2rem, 4.5vw);
`

const InputLogin = styled(Input) `
    postion: absolute;
    width: 50vw;
    max-width: 200px;
`

const ErrorTextLogin = styled(ErrorText) `
    height: 5px;
    margin: 30px 0 25px;
`

export {DataBoxLogin, FormLogin, LabelLogin, InputLogin, ErrorTextLogin}