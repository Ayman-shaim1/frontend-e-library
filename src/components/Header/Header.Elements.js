import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";

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

const StyledHeaderContentToggle = styled(Button)`
  background-color: var(--main-color-hover);
  padding: 10px 20px;
  display: none;
  @media (max-width: 842px) {
    display: block;
  }
`;

const slideHeaderContent = keyframes`
 0% {  left: 0 }
 100% {  left: 50% }
`;

const StyledHeaderContentClose = styled.span`
  color: #fff;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  display: ${(props) => (props.show ? "block" : "none")};
  /* display: block; */
`;

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

const StyledHeaderLink = styled(Link)`
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

export const HeaderLink = ({ children, to, closeHeaderContent }) => (
  <StyledHeaderLink to={to} onClick={closeHeaderContent}>
    {children}
  </StyledHeaderLink>
);

export const HeaderContentToggle = ({ openHeaderContent }) => (
  <StyledHeaderContentToggle onClick={openHeaderContent}>
    <i className="fa-solid fa-bars"></i>
  </StyledHeaderContentToggle>
);

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  animation-name: ${slideHeaderContent};
  animation-duration: var(--main-duration);
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

export const HeaderContentClose = ({ closeHeaderContent, show }) => (
  <StyledHeaderContentClose onClick={closeHeaderContent} show={show}>
    <i className="fas fa-times"></i>
  </StyledHeaderContentClose>
);

HeaderLink.defaultProps = {
  to: "#",
};

const StyledHeaderDropdown = styled.div`
  user-select: none;
  position: relative;
  padding: 10px 16px;
  border-radius: var(--main-border-radius);
  width: 100%;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: var(--main-color-hover);
    color: var(--secondary-color);
  }
`;

const StyledHeaderDropdownMenu = styled.div`
  padding: 7px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: var(--main-border-radius);
  position: absolute;
  min-width: 200px;
  max-width: 400px;
  width: 100%;
  left: 0;
  top: 110%;
  background-color: #fff;
  z-index: 1000;
  display: ${(props) => (props.show ? "flex" : "none")};
  transition: var(--main-duration);
`;
const StyledHeaderDropdownToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledHeaderDropdownIcon = styled.i`
  margin-left: 10px;
  margin-bottom: 6px;
`;

const StyledHeaderDropdownItem = styled(Link)`
  text-decoration: none;
  color: var(--secondary-color);
  padding: 10px;
  &:hover,
  :active {
    background-color: var(--main-color);
    color: #fff;
  }
`;

export const HeaderDropdownItem = ({ children, to, closeHeaderContent }) => (
  <StyledHeaderDropdownItem to={to} onClick={closeHeaderContent}>
    {children}
  </StyledHeaderDropdownItem>
);
HeaderDropdownItem.defaultProps = {
  to: "#",
};
export const HeaderDropdown = ({ children, title }) => {
  // states :
  const [show, setShow] = useState(false);
  // ref's:
  const headerdropdownToggleRef = useRef();

  const handleClickOutside = (e) => {
    if (
      headerdropdownToggleRef &&
      !headerdropdownToggleRef.current.contains(e.target)
    )
      setShow(false);
  };

  const toggleMenu = () => setShow(!show);
  useEffect(() => document.addEventListener("click", handleClickOutside));

  return (
    <StyledHeaderDropdown>
      <StyledHeaderDropdownToggle
        onClick={toggleMenu}
        ref={headerdropdownToggleRef}
      >
        <span>{title}</span>
        <StyledHeaderDropdownIcon className="fa-solid fa-sort-down"></StyledHeaderDropdownIcon>
      </StyledHeaderDropdownToggle>
      <StyledHeaderDropdownMenu show={show}>
        {children}
      </StyledHeaderDropdownMenu>
    </StyledHeaderDropdown>
  );
};
