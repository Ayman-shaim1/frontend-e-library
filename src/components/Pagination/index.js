import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledPageItem = styled(Link)`
  padding: 8px 15px;
  border: 1px solid lightgray;
  border-right: none;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    background-color: #f4f4f4;
  }
  &:last-child {
    border-radius: 0 5px 5px 0;
    border-right: 1px solid lightgray;
  }
  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &.active {
    background-color: var(--main-color);
    color: #fff;
    border-color: var(--main-color);
  }
  &[active="true"] {
    background-color: var(--main-color);
    color: #fff;
    border-color: var(--main-color) !important;
  }
`;

export const Pagination = ({ children }) => {
  return <StyledPagination>{children}</StyledPagination>;
};
export const PageItem = ({ children, to, ...otherProps }) => {
  return (
    <StyledPageItem to={to} {...otherProps}>
      {children}
    </StyledPageItem>
  );
};

PageItem.defaultProps = {
  to: "#",
};
