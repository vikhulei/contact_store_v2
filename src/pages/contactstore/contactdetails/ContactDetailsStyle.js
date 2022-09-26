import styled from "styled-components"
import {Label, Input} from "../../../components/ui/StyledComponents"
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
    z-index: ${(({showSelect}) => showSelect ? 99 : 0)};
    opacity: ${(({showSelect}) => showSelect ? 1 : 0)}
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

const CountryCode = styled.input `
    height: 1.5rem;
    width: 20%;
    padding-left: 5px;
    background-color: #F2E0FB;
    border: black 1px solid;
    border-radius: 5px;
    box-shadow: gray 0px 5px 5px;
`

const AreaCode = styled(DetailsInput) `
    width: 18%;
`

const Extension = styled(DetailsInput) `
    width: 12%;
`
const PhoneNumber = styled(DetailsInput) `
    width: 40%;
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
    width: 5%;
    margin: 3% 0 0 43px;
    background: transparent;
    border: none;
`

const MobileButtonsWrapper = styled.div `
margin-top: 15px;
@media screen and (min-width: 1000px) {
    display: none;
}
`



export {DataWrapper, SearchWrapper, SelectWrapper, DetailsLabel, DetailsInput, NumbersWrapper, CountryCode, AreaCode, Extension, PhoneNumber, ArrowWrapper, ArrowDown, ArrowUp, MobileButtonsWrapper, DeleteIcon, AddIcon, SelectMobile}