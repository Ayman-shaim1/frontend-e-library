import styled, { keyframes } from "styled-components";

const sizes = {
  xs: "15px",
  sm: "30px",
  md: "100px",
  lg: "200px",
  xl: "300px",
};

const borderSizes = {
  xs: "2px",
  sm: "3px",
  md: "4px",
  lg: "5px",
  xl: "6px",
};

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: ${(props) => props.size && borderSizes[props.size]} solid #f3f3f3;
  border-top: ${(props) => props.size && borderSizes[props.size]} solid
    ${(props) => props.color && `var(--${props.color}-color)`};
  border-radius: 50%;
  width: ${(props) => (props.size ? sizes[props.size] : "100px")};
  height: ${(props) => (props.size ? sizes[props.size] : "100px")};
  margin: 5px;
  animation: ${spin} 1s linear infinite;
`;

Loader.defaultProps = {
  size: "md",
  color: "main",
};

export default Loader;
