import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

const BackgroundColor = styled.div`
  position: absolute;
  top: 80px;
  bottom: 0;
  width: 100%;
  height: 500px;
  min-height: calc(100vh - 80px);
  background-color: #bd9ce8;
  background-color: #a398fb;
  overflow: hidden;
  @media screen and (max-width: 1450px) {
    height: 1750px;
  }
  @media screen and (max-width: 1050px) {
    height: 2200px;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100vw;
  min-width: 2000px;
  height: 1300px;
  object-fit: cover;
  opacity: 0.4;
`;

export { Wrapper, BackgroundColor, BackgroundImage };
