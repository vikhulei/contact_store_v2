import styled from "styled-components";
import { Input } from "../../../components/ui/StyledComponents";

const DataWrapper = styled.form `
  position: relative;
  margin-top: 3%;
  width: 90%;
  height: 70%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
//   justify-content: space-between;
`;

const SearchField = styled(Input) `
  width: 100%;
`;

const SelectList = styled.div `
  position: relative;
  margin-top: 5%;
  width: 100%;
  height: 70%;
  border: 1px grey solid;
  border-radius: 5px;
  box-shadow: gray 0px 5px 5px;
  background-color: #F2E0FB;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-track {
    border: 0.1px solid #dcb6fc;
    background-color: #e8cefd;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #560594;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
`
const OptiontWrapper = styled.div `
  position: relative;
  width: 100%;
`;

const OptionLabel = styled.label `
height: 7px;
font-size: 0.9rem;
padding: 10px 0;
display: flex;
align-items: center;
border-bottom: 2px grey solid;
`

const OptionButton = styled.input `
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  &:checked + ${OptionLabel} {
    background-color: ${(({cancelled}) => cancelled ? "transparent" : "#d29dfb" )}
      ;
  }
`


export { DataWrapper, SearchField, SelectList, OptiontWrapper, OptionLabel, OptionButton };

// &:checked + ${OptionLabel} {
//   background-color: red;
// }