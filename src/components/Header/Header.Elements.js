import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--main-color);
  padding: 7px 20px;
  color: #fff;
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;
  justify-content: space-between;
  @media (max-width: 842px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const StyledHeaderLogoText = styled.h2`
  display: flex;
  align-items: center;
`;

const StyledHeaderLogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  :hover {
    color: #fff;
  }
  & > i {
    margin-right: 10px;
  }
`;

export const HeaderLogo = ({ to, children }) => (
  <StyledHeaderLogoText>
    <StyledHeaderLogoLink to={to}>{children}</StyledHeaderLogoLink>
  </StyledHeaderLogoText>
);

HeaderLogo.defaultProps = {
  to: "#",
};

export const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 5px;
  @media (max-width: 842px) {
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const HeaderItem = styled.li`
  color: #fff;
  margin: 5px;
  @media (max-width: 842px) {
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    justify-content: center;
    & > div,
    & > button {
      padding: 20px;
    }
  }
`;

export const HeaderLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: var(--main-border-radius);
  display: flex;
  align-items: center;
  transition: var(--main-duration);
  & > i {
    margin-right: 5px;
  }
  &:hover,
  &:active {
    background-color: var(--main-color-hover);
  }

  @media (max-width: 842px) {
    width: 100%;
    padding: 20px;
    justify-content: center;
    & > i {
      margin-top: -3px;
    }
  }
`;

export const StyledHeaderContentToggle = styled(Button)`
  background-color: var(--main-color-hover);
  padding: 10px 20px;
  display: none;
  @media (max-width: 842px) {
    display: block;
  }
`;

export const HeaderContentToggle = ({ openHeaderContent }) => (
  <StyledHeaderContentToggle onClick={openHeaderContent}>
    <i className="fa-solid fa-bars"></i>
  </StyledHeaderContentToggle>
);

const slideHeaderContent = keyframes`
 0% {  left: 0 }
 100% {  left: 50% }

`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  animation-name: ${slideHeaderContent};
  animation-duration: 0.4s;
  @media (max-width: 842px) {
    display: ${(props) => (props.show ? "flex" : "none")};
    /* display: flex; */
    overflow-y: auto;
    background-color: var(--main-color);
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
`;

export const StyledHeaderContentClose = styled.span`
  color: #fff;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  display: ${(props) => (props.show ? "block" : "none")};
  /* display: block; */
`;

export const HeaderContentClose = ({ closeHeaderContent, show }) => (
  <StyledHeaderContentClose onClick={closeHeaderContent} show={show}>
    <i className="fas fa-times"></i>
  </StyledHeaderContentClose>
);

HeaderLink.defaultProps = {
  to: "#",
};
