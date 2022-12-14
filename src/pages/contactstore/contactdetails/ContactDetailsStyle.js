import styled from "styled-components"
import {Label, Input, ErrorText} from "../../../components/ui/StyledComponents"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const DataWrapper = styled.form `
    position: relative;
    width: 90%;
    height: 45%;
    margin: 15% auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ErrorTextContactDetails = styled(ErrorText) `
    margin-top: 5%;
`

const SearchWrapper = styled.div `
    width: 100%;
    z-index: 101;
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

const ArrowDown = styled(ArrowDropDownOutlinedIcon) `
    transform: scale(1.2);
`

const ArrowUp = styled(ArrowDropUpOutlinedIcon) `
    transform: scale(1.2);
`

const SelectWrapper = styled.div `
    position: absolute;
    height: 100%;
    width: 100%;
    visibility: ${(({showSelect}) => showSelect ? "visible" : "hidden")};
`

const DetailsLabel = styled(Label) `
    font-size: 1rem;
`

const DetailsInput = styled(Input) `
    position: relative;
    width: 70%;
    height: 1.5rem;
    transition: color 2s;
    color: ${(({deleteButtonPressed}) => deleteButtonPressed ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)")};
`

const NumbersWrapper = styled.div `
    position: relative;
    width: 90%;
    height: 20%;
    margin: 5% auto 0;
    padding: 10px;
    overflow-y: auto;
    border: grey 1px solid;
    box-shadow: gray 0px 0px 10px;
    &::-webkit-scrollbar {
        width: 5px;
        background-color: grey;
    }
    ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
      }
`

const CountryCode = styled(DetailsInput) `
    position: static;
    height: 1.5rem;
    width: 23%;
`

const AreaCode = styled(DetailsInput) `
    width: 20%;
`

const Extension = styled(DetailsInput) `
    width: 10%;
`
const PhoneNumber = styled(DetailsInput) `
    width: 37%;
`

const DeleteIcon = styled(DeleteOutlined) `
    transform: translate(10%, 30%);
    &:active {
        transform: translate(10%, 30%) scale(1.2);
    }
`
const AddIcon = styled(AddCircleOutlineIcon) `
    float: right;
    margin-right: 5px;
    transform: translate(10%, 30%);
    &:active {
        transform: translate(10%, 30%) scale(1.2);
    }
`

const SelectMobile = styled.select `
    position: absolute;
    width: 15px;
    margin: 10px 0 0 50px;
    background: #F2E0FB;
    border: none;
`

const MobileButtonsWrapper = styled.div `
margin-top: 25px;
@media screen and (min-width: 1000px) {
    display: none;
}
`

export {DataWrapper, ErrorTextContactDetails, SearchWrapper, SelectWrapper, DetailsLabel, DetailsInput, NumbersWrapper, CountryCode, AreaCode, Extension, PhoneNumber, ArrowWrapper, ArrowDown, ArrowUp, MobileButtonsWrapper, DeleteIcon, AddIcon, SelectMobile}