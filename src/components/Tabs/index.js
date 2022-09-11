import styled from "styled-components";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const StyledTabs = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  min-height: 400px;
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px;" : "400px;")};
`;

const StyledTabButton = styled.span`
  display: block;
  padding: 12px 15px;
  font-size: 12px;
  margin: 15px 5px;
  border-radius: var(--main-border-radius);
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${(props) => !props.active && "#f4f4f4"};
  }
`;

const StyledTabContent = styled.div`
  position: absolute;
  display: none;
  width: 100%;
  left: 0;

  &::before {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background-color: lightgray;
  }
`;

const StyledTab = styled.div`
  display: block;

  &.active {
    & > span {
      background-color: var(--main-color);
      color: #fff;
    }

    & > div {
      display: block;
    }
  }
`;

export const Tabs = ({ children, height }) => {
  const id = uuidv4();
  return (
    <StyledTabs id={id} height={height}>
      {children}
    </StyledTabs>
  );
};

export const Tab = ({ children, title, active }) => {
  const tabItemRef = useRef();

  const activeClassName = () => (active ? "active" : "");

  const setActiveHandler = () => {
    const id = tabItemRef.current.parentElement.getAttribute("id");
    const activeTabItem = document
      .getElementById(id)
      .querySelector(".tab-item.active");

    activeTabItem.classList.remove("active");
    tabItemRef.current.classList.add("active");
  };

  return (
    <StyledTab className={`tab-item ${activeClassName()}`} ref={tabItemRef}>
      <StyledTabButton onClick={setActiveHandler}>{title}</StyledTabButton>
      <StyledTabContent>{children}</StyledTabContent>
    </StyledTab>
  );
};
