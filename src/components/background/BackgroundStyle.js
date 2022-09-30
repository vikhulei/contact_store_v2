import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(163, 152, 251, 0.6);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  `;
  
  const BackgroundImage = styled.img`
    position: fixed;
    min-width: 2000px;
    height: 1300px;
    object-fit: cover;
    opacity: 0.6;
  `;

// const BackgroundColor = styled.div`
//   position: absolute;
//   top: 80px;
//   bottom: 0;
//   width: 100%;
//   height: 500px;
//   min-height: calc(100vh - 80px);
//   background-color: #bd9ce8;

//   overflow: hidden;
//   @media screen and (max-width: 1450px) {
//     height: 1750px;
//   }
//   @media screen and (max-width: 1050px) {
//     height: 2200px;
//   }
// `;


export { Wrapper, BackgroundImage };
