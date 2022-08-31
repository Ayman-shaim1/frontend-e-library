import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const StyledTab = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* flex-direction: column; */
  width: 100%;
  margin: 18px 0;
  position: relative;
  border-bottom: 2px solid lightgray;
`;

const StyeldTabItem = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  margin-right: 5px;
  margin-bottom: 15px;
  display: inline-block;
  background-color: #fff;
  color: #000;
  border-radius: var(--main-border-radius);
  font-size: 12px;
  width: 100%;
  outline: none;
  &:hover {
    background-color: #f4f4f4;
  }
  &.active {
    background-color: var(--main-color);
    color: #fff;
  }
  &[active="true"] {
    background-color: var(--main-color);
    color: #fff;
  }
`;

export const Tab = ({ children }) => {
  const id = uuidv4();
  return <StyledTab id={id}>{children}</StyledTab>;
};

export const TabItem = ({ to, children, onClick, ...otherProps }) => {
  // ref :
  const tabItemRef = useRef();
  const clickHandler = (e) => {
    e.preventDefault();
    const id = tabItemRef.current.parentElement.getAttribute("id");
    if (onClick) onClick();
    document
      .getElementById(id)
      .querySelectorAll(".tab-item")
      .forEach((tabItem) => tabItem.removeAttribute("active"));
    tabItemRef.current.setAttribute("active", true);
  };

  return (
    <StyeldTabItem
      {...otherProps}
      to={to}
      onClick={clickHandler}
      className={`tab-item`}
      ref={tabItemRef}
    >
      {children}
    </StyeldTabItem>
  );
};

TabItem.defaultProps = {
  to: "#",
};
