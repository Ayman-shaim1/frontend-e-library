import styled, { keyframes } from "styled-components";

const sizes = {
  sm: "30px",
  md: "100px",
  lg: "200px",
  xl: "300px",
};

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid var(--main-color);
  border-radius: 50%;
  width: ${(props) => (props.size ? sizes[props.size] : "100px")};
  height: ${(props) => (props.size ? sizes[props.size] : "100px")};
  margin: 5px;
  animation: ${spin} 2s linear infinite;
`;

export default Loader;
