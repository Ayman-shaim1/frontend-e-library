import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--main-color);
  padding: 7px 20px;
  color: #fff;
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
  list-style: none; ;
`;
const StyledHeaderItem = styled.li`
  color: #fff;
  margin: 5px;
`;
const StyledHeaderLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: var(--main-border-radius);
  &:hover,
  &:active {
    background-color: var(--main-color-hover);
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLink = ({ to, children }) => (
  <StyledHeaderItem>
    <StyledHeaderLink to={to}>{children}</StyledHeaderLink>
  </StyledHeaderItem>
);
HeaderLink.defaultProps = {
  to: "#",
};
