import styled from "styled-components"
import { DataBoxNav, ErrorText } from "../../../components/ui/StyledComponents"


const DataBoxNavProfile = styled(DataBoxNav)`
    background-color: #A809CF;
`

const ImageDataContainer = styled.div `
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 12%;
    width: 90%;
    height: 22%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    z-index: 99;
    // background-color: red;
`

const TopImageText = styled.p`
    position: relative;
    font-size: 0.7rem;
    font-weight: 600;
    // top: 65px;
    // right: 5px;
`
const ImageWrapper = styled.div`
    position: relative;
    // top: 85px;
    // right: 5px;
    height: 100px;
    width: 100px;
`

const InputImage = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    &:hover {
        cursor: pointer;
    }
    &::file-selector-button {
        &:hover {
          cursor: pointer;
        }
      }
    opacity: 0;
    z-index: 99;
`
const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const ErrorImageText = styled(ErrorText)`
    // position: absolute;
    top: 190px;
    right: 5px;
    // visibility: hidden;
`

const ErrorDataText = styled(ErrorText) `
      grid-column: 1/3;
      @media screen and (max-width: 600px) {
          grid-column: 1/2;
      }
    //   visibility: hidden;
`

const InfoWrapper = styled.div`
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      top: 12%;
      width: 90%;
      height: 38%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      font-size: 0.8rem;
      @media screen and (max-width: 600px) {
          grid-template-columns: 1fr;
          grid-template-row: repeat(8, 1fr);
          top: 9%;
          height: 38%;
      }
`

const InfoLabel = styled.p`
    font-weight: bold;
    @media screen and (max-width: 600px) {
     display: flex;
     align-items: flex-end;   
     line-height: 2;
    }
`

const InfoData = styled.p`
    color: #31047B;
    font-weight: bold;

    // background-color: red;
        
`
const PasswordForm = styled.form`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 90%;
    height: 300px;
    bottom: 10px;
`

const Fieldset = styled.fieldset`
      width: 100%;
      height: 100%;
      background-color: #D5C2DE;
      border: black solid 1px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 3% 0;
`

const Legend = styled.legend`
      font-size: 0.8rem;
      margin-left: 20px;
      padding: 0 5px;
`
const InputsGroup = styled.div`
      width: 100%;
      height: 35%;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    //   background-color: lightgreen;
      font-size: 0.5rem;
`

export { DataBoxNavProfile, ImageDataContainer, ImageWrapper, InputImage, Image, TopImageText, ErrorImageText, ErrorDataText, InfoWrapper, InfoLabel, InfoData, PasswordForm, Fieldset, Legend, InputsGroup }