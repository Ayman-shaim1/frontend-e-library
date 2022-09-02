import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const StyledTab = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  margin: 18px 0;
  width: 100%;
  border-bottom: 1px solid lightgray;
  ${(props) =>
    props.type &&
    props.type.toLowerCase() === "vertical" &&
    "border:none; flex-direction:column;"}
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
  ${(props) =>
    props.type && props.type.toLowerCase() === "vertical" && "width: 100%;"};

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

export const Tab = ({ children, type }) => {
  const id = uuidv4();
  console.log(type);
  return (
    <StyledTab id={id} type={type}>
      {children}
    </StyledTab>
  );
};

export const TabItem = ({ to, children, onClick, ...otherProps }) => {
  // states:
  const [type, setType] = useState(null);
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

  useEffect(() => {
    setType(tabItemRef.current.parentElement.getAttribute("type"));
  }, [setType]);



  return (
    <StyeldTabItem
      {...otherProps}
      to={to}
      onClick={clickHandler}
      className={`tab-item`}
      ref={tabItemRef}
      type={type}
    >
      {children}
    </StyeldTabItem>
  );
};

TabItem.defaultProps = {
  to: "#",
};
