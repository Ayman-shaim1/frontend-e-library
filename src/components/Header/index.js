import React from "react";
import { Container, Button, Flex } from "../index";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenu,
  HeaderLink,
  HeaderContent,
} from "./Header.Elements";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  console.log(location);
  if (
    location.pathname.toLocaleLowerCase() === "/login" ||
    location.pathname.toLocaleLowerCase() === "/register"
  ) {
    return <></>;
  } else {
    return (
      <HeaderContainer>
        <Container>
          <Flex alignItems="center" justifyContent="space-between">
            <HeaderLogo to={"/"}>
              <i className="fa-solid fa-book "></i>E-library
            </HeaderLogo>
            <HeaderContent>
              <HeaderMenu>
                <HeaderLink to="/">Books</HeaderLink>
              </HeaderMenu>
              <Button color="secondary">Login</Button>
            </HeaderContent>
          </Flex>
        </Container>
      </HeaderContainer>
    );
  }
};

export default Header;
