import React, { useState, useEffect } from "react";
import { Button } from "../index";
import { Dropdown, DropdownItem } from "../Dropdown";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenu,
  HeaderContent,
  HeaderContentToggle,
  HeaderContentClose,
  HeaderItem,
  HeaderLink,
} from "./Header.Elements";
import { Modal } from "../Modal";

import { useLocation } from "react-router-dom";

const Header = () => {
  // states :
  const [show, setShow] = useState(false);
  const location = useLocation();

  const closeHeaderContentHandler = () => setShow(false);
  const openHeaderContentHandler = () => setShow(true);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth > 842) {
        setShow(false);
      }
    });
  });

  if (
    location.pathname.toLocaleLowerCase() === "/login" ||
    location.pathname.toLocaleLowerCase() === "/register"
  ) {
    return <></>;
  } else {
    return (
      <>
        <HeaderContainer>
          <HeaderLogo to={"/"}>
            <i className="fa-solid fa-book-open"></i>E-library
          </HeaderLogo>
          <HeaderContentToggle openHeaderContent={openHeaderContentHandler} />
          <HeaderContent show={show}>
            <HeaderContentClose
              closeHeaderContent={closeHeaderContentHandler}
              show={show}
            />
            <HeaderMenu>
              <HeaderItem>
                <HeaderLink to="/">
                  <i className="fa-solid fa-house"></i> Home
                </HeaderLink>
              </HeaderItem>
              <HeaderItem>
                <HeaderLink to="/Books">
                  <i className="fa-solid fa-book"></i> Books
                </HeaderLink>
              </HeaderItem>

              <HeaderItem>
                <Dropdown
                  title={
                    <>
                      <i className="fas fa-user"></i> Hello username
                    </>
                  }
                >
                  <DropdownItem to="/Profile">
                    <i className="fa-solid fa-address-card"></i> Profile
                  </DropdownItem>
                  <DropdownItem to="/Settings">
                    <i className="fa-solid fa-gear"></i> Settings
                  </DropdownItem>
                  <DropdownItem to="/Logout">
                    <i className="fa-solid fa-right-from-bracket"></i> Logout
                  </DropdownItem>
                </Dropdown>
              </HeaderItem>
              <HeaderItem>
                <Button color="secondary" block>
                  Sign Up
                </Button>
              </HeaderItem>
            </HeaderMenu>
          </HeaderContent>
        </HeaderContainer>
        {/* Begin Login Modal */}
        <Modal>
          <h1>Hello world</h1>
        </Modal>
        {/* End Login Modal */}
      </>
    );
  }
};

export default Header;
