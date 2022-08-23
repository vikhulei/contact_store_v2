import styled from "styled-components"
import { DataBoxNav, ErrorText } from "../../../components/ui/StyledComponents"


const DataBoxNavProfile = styled(DataBoxNav)`
    background-color: #A809CF;
`
const TopImageText = styled.p`
    position: absolute;
    font-size: 0.7rem;
    font-weight: 600;
    top: 65px;
    right: 5px;
`

const ImageWrapper = styled.div`
    position: absolute;
    top: 85px;
    right: 5px;
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
    position: absolute;
    top: 190px;
    right: 5px;
    // display: none;
`

const ErrorImageInfo = styled(ErrorImageText)`
      top: 80px;
      left: 15px;
    //   display: none;
`

const InfoWrapper = styled.div`
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      top: 17%;
      width: 90%;
      height: 35%;
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: 1fr 1fr;
      font-size: 0.8rem;
      @media screen and (max-width: 600px) {
          grid-template-rows: repeat(8, 1fr);
          grid-template-columns: 1fr;
          height: 30%;
      }
`

const InfoLabel = styled.p`
    font-weight: bold;
`

const InfoData = styled.p`
    color: #31047B;
    font-weight: bold;
    @media screen and (max-width: 600px) {
        line-height: 0.5;
    }
        
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

export { DataBoxNavProfile, ImageWrapper, InputImage, Image, TopImageText, ErrorImageText, ErrorImageInfo, InfoWrapper, InfoLabel, InfoData, PasswordForm, Fieldset, Legend, InputsGroup }