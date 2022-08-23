import styled from "styled-components"
import VisibilityIcon from '@mui/icons-material/Visibility';

const Form = styled.form `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%;
`

const Label = styled.label `
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
font-size: 0.8rem;
font-weight: bold;
`

const Input = styled.input `
    height: 25px;
    max-width: 55%;
    padding-left: 5px;
    background-color: #F2E0FB;
    border: black 1px solid;
    border-radius: 5px;
    box-shadow: gray 0px 5px 5px;
`
const SmallButton = styled.button `
    width: 110px;
    height: 30px;
    color: white;
    background-color: #450577;
    border: black 1px solid;
    border-radius: 5px;
    // box-shadow: black 0px 0px 8px;
    &:hover {
        cursor: pointer;
    }
    &:active {
        transform: translate(3px, 3px);
    }
    &:disabled {
        color: green;
        pointer-events: none;
    }
`

const LargeButton = styled(SmallButton) `
    width: 150px;
    height: 40px;
    font-size: 1.2rem;
`

const ErrorText = styled.p `
    color: #B70606;
    font-size: min(0.8rem, 4.5vw);
    font-weight: bold;
`

const DataBox = styled.div `
    position: relative;
    width: 90vw;
    max-width: 350px;
    height: 600px;
    background-color: #DECDE5;
    border: black 1px solid;
    border-radius: 20px;
    // box-shadow: black 0px 0px 30px;
`

const DataBoxNav = styled.div `
    position: relative;
    width: 100%;
    height: 60px;
    border: black 1px solid;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: #6F04C3;
    color: white;
    text-align: center;
    line-height: 2;
    font-size: 1.8rem;
    @media screen and (max-width: 600px) {
        font-size: 1.5rem;
        height: 50px;
    }
`
const Visibility = styled(VisibilityIcon) `
position: absolute;
right: 5%;
opacity: 0.7;
transform: scale(0.7);
`

export {Form, Input, Label, SmallButton, LargeButton, ErrorText, DataBox, DataBoxNav, Visibility}
