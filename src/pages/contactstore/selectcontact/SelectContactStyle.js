import styled from "styled-components";
import { Input, ErrorText } from "../../../components/ui/StyledComponents";

const Wrapper = styled.div `
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

const DataWrapper = styled.form `
  position: relative;
  margin-top: 3%;
  width: 90%;
  height: 80%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
`;

const SelectWrapper = styled.div `
  margin-top: 5%;
  height: 90%;
`

export { Wrapper, DataWrapper, SelectWrapper };
