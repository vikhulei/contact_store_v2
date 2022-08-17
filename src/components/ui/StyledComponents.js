import styled from "styled-components"

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
width: 50%;
`

const Input = styled.input `
    height: 25px;
    width: 150px;
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
`

const LargeButton = styled(SmallButton) `
    width: 150px;
    height: 40px;
    font-size: 1.2rem;
`

const RedText = styled.p `
    color: #B70606;
    font-weight: 600;
`

const DataBox = styled.div `
    position: relative;
    width: 100vw;
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
    line-height: 1.5;
    font-size: 2rem;
`

export {Form, Input, Label, SmallButton, LargeButton, RedText, DataBox, DataBoxNav}