import styled from "styled-components"
import {Label, Input} from "../../../components/ui/StyledComponents"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';

const DataWrapper = styled.form `
    position: relative;
    width: 90%;
    height: 45%;
    margin: 10% auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const SearchWrapper = styled.div `
    width: 100%;
    background-color: red;
    @media screen and (min-width: 1000px) {
        display: none;
    }
`

const ArrowWrapper = styled.div `
    position: absolute;
    display: inline-block;
    right: 1%;
    z-index: 100;
`

const ArrowDown = styled(ArrowDropDownOutlinedIcon) ``

const ArrowUp = styled(ArrowDropUpOutlinedIcon) ``

const SelectWrapper = styled.div `
    position: absolute;
    height: 150%;
    width: 100%;
    z-index: 99;
    // margin-top: -16px;

`

const DetailsLabel = styled(Label) `
    font-size: 1rem;
`

const DetailsInput = styled(Input) `
    position: relative;
    width: 70%;
    height: 1.5rem;

`

const NumbersWrapper = styled.div `
    position: relative;
    width: 90%;
    height: 20%;
    margin: 5% auto 0;
`

const CountryCode = styled.select `
    height: 1.5rem;
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

export {DataWrapper, SearchWrapper, SelectWrapper, DetailsLabel, DetailsInput, NumbersWrapper, CountryCode, AreaCode, Extension, PhoneNumber, ArrowWrapper, ArrowDown, ArrowUp}