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


export { Wrapper, BackgroundImage };
