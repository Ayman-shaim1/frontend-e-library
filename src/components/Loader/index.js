import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 7px solid #f3f3f3;
  border-top: 7px solid var(--main-color);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 5px;
  animation: ${spin} 2s linear infinite;
`;

export default Loader;
