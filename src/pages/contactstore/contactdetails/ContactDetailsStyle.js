import styled from "styled-components"
import {Label, Input} from "../../../components/ui/StyledComponents"

const DataWrapper = styled.form `
    position: relative;
    width: 90%;
    height: 45%;
    margin: 10% auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const DetailsLabel = styled(Label) `
    font-size: 1rem;
`

const DetailsInput = styled(Input) `
    position: relative;
    width: 70%;
    height: 1.8rem;

`

const NumbersWrapper = styled.div `
    position: relative;
    width: 90%;
    height: 20%;
    margin: 5% auto 0;
`

const CountryCode = styled.select `
    height: 1.8rem;
    width: 18%;
    padding-left: 5px;
    background-color: #F2E0FB;
    border: black 1px solid;
    border-radius: 5px;
    box-shadow: gray 0px 5px 5px;
`

const AreaCode = styled(DetailsInput) `
    width: 20%;
`

const Extension = styled(DetailsInput) `
    width: 12%;
`
const PhoneNumber = styled(DetailsInput) `
    width: 50%;
`

export {DataWrapper, DetailsLabel, DetailsInput, NumbersWrapper, CountryCode, AreaCode, Extension, PhoneNumber}