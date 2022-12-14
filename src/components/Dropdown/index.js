import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const StyledDropdown = styled.div`
  user-select: none;
  position: relative;
  margin-left: 15px;
  margin-right: 15px;
`;

const StyledDropdownMenu = styled.div`
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
  background-color: #fff;
  z-index: 1000;
  display: ${props => (props.show ? "flex" : "none")};
  transition: var(--main-duration);
`;
const StyledDropdownToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledDropdownIcon = styled.i`
  margin-left: 10px;
  margin-bottom: 6px;
`;

const StyledDropdownItem = styled(Link)`
  text-decoration: none;
  color: var(--secondary-color);
  padding: 10px;
  &:hover,
  :active {
    background-color: var(--main-color);
    color: #fff;
  }
`;

export const DropdownItem = ({ children, to }) => (
  <StyledDropdownItem to={to}>{children}</StyledDropdownItem>
);
DropdownItem.defaultProps = {
  to: "#",
};
export const Dropdown = ({ children, title }) => {
  // states :
  const [show, setShow] = useState(false);
  // ref's:
  const dropdownToggleRef = useRef();

  const handleClickOutside = e => {
    if (dropdownToggleRef && !dropdownToggleRef.current.contains(e.target))
      setShow(false);
  };

  const toggleMenu = () => setShow(!show);
  useEffect(() => document.addEventListener("click", handleClickOutside));

  return (
    <StyledDropdown>
      <StyledDropdownToggle onClick={toggleMenu} ref={dropdownToggleRef}>
        <span>{title}</span>
        <StyledDropdownIcon className='fa-solid fa-sort-down'></StyledDropdownIcon>
      </StyledDropdownToggle>
      <StyledDropdownMenu show={show}>{children}</StyledDropdownMenu>
    </StyledDropdown>
  );
};
