import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  border: 1px solid var(--${(props) => props.color}-color);
  color: ${(props) => (props.outline ? `var(--${props.color}-color)` : "#fff")};
  ${(props) =>
    props.small
      ? " padding: 10px 25px; font-size: 12px;"
      : " padding: 12px 25px; font-size: 15px;"};

  font-family: "Poppins", sans-serif;
  background-color: ${(props) =>
    props.outline ? "transparent" : `var(--${props.color}-color)`};
  border-radius: var(--main-border-radius);
  transition: var(--main-duration);
  ${(props) => props.block && "width:100%"};
  &:hover {
    transform: scale(0.99);
    background-color: ${(props) =>
      props.outline
        ? `var(--${props.color}-color)`
        : `var(--${props.color}-color-hover)`};
    color: ${(props) => props.outline && "#fff"};
    outline: none;
  }
`;

Button.defaultProps = {
  color: "main",
};
export default Button;
