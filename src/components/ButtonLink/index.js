import styled from "styled-components";
import { Link } from "react-router-dom";
const ButtonLink = styled(Link)`
  cursor: pointer;
  border: 1px solid var(--${(props) => props.color}-color);
  color: ${(props) => (props.outline ? `var(--${props.color}-color)` : "#fff")};
  ${(props) =>
    props.small
      ? " padding: 10px 25px; font-size: 12px; !important"
      : " padding: 12px 25px; font-size: 15px;"};

  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  background-color: ${(props) =>
    props.outline ? "transparent" : `var(--${props.color}-color)`};
  border-radius: var(--main-border-radius);
  transition: var(--main-duration);
  ${(props) => props.block && "width:100%"};

  &:hover {
    color: #fff;
    transform: scale(0.99);
    background-color: ${(props) =>
      props.outline
        ? `var(--${props.color}-color)`
        : `var(--${props.color}-color-hover)`};
    color: ${(props) => props.outline && "#fff"};
    outline: none;
  }
`;

ButtonLink.defaultProps = {
  color: "main",
};
export default ButtonLink;
