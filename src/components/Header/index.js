import React, { useState, useEffect } from "react";
import { Button, Center } from "../index";
import { Link } from "react-router-dom";
import {
  Form,
  FormCheck,
  FormInput,
  FormInputIcon,
  FormInputGroup,
  FormLabel,
} from "../Form";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenu,
  HeaderContent,
  HeaderContentToggle,
  HeaderContentClose,
  HeaderItem,
  HeaderLink,
  HeaderDropdown,
  HeaderDropdownItem,
} from "./Header.Elements";
import { Modal } from "../Modal";

import { useLocation } from "react-router-dom";

const Header = () => {
  // hooks :
  const location = useLocation();
  // states :
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const closeHeaderContentHandler = () => setShow(false);
  const openHeaderContentHandler = () => setShow(true);

  const submitHandler = e => {
    e.preventDefault();
  };
  const handleShowPassword = event => {
    setShowPassword(event.target.checked);
  };

  useEffect(() => {
    window.addEventListener("resize", e => {
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
            <i className='fa-solid fa-book-open'></i>E-library
          </HeaderLogo>
          <HeaderContentToggle openHeaderContent={openHeaderContentHandler} />
          <HeaderContent show={show}>
            <HeaderContentClose
              closeHeaderContent={closeHeaderContentHandler}
              show={show}
            />
            <HeaderMenu>
              <HeaderItem>
                <HeaderLink
                  to='/'
                  closeHeaderContent={closeHeaderContentHandler}>
                  <i className='fa-solid fa-house'></i> Home
                </HeaderLink>
              </HeaderItem>
              <HeaderItem>
                <HeaderLink
                  to='/Books'
                  closeHeaderContent={closeHeaderContentHandler}>
                  <i className='fa-solid fa-book'></i> Books
                </HeaderLink>
              </HeaderItem>
              <HeaderItem>
                <HeaderDropdown
                  title={
                    <>
                      <i className='fas fa-user'></i> Hello username
                    </>
                  }>
                  <HeaderDropdownItem
                    to='/Settings'
                    closeHeaderContent={closeHeaderContentHandler}>
                    <i className='fa-solid fa-gear'></i> Settings
                  </HeaderDropdownItem>
                  <HeaderDropdownItem
                    to='/Logout'
                    closeHeaderContent={closeHeaderContentHandler}>
                    <i className='fa-solid fa-right-from-bracket'></i> Logout
                  </HeaderDropdownItem>
                </HeaderDropdown>
              </HeaderItem>
              <HeaderItem>
                <Button
                  color='secondary'
                  block
                  onClick={() => {
                    setShow(false);
                    setShowModal(true);
                  }}>
                  Sign Up
                </Button>
              </HeaderItem>
            </HeaderMenu>
          </HeaderContent>
        </HeaderContainer>
        {/* Begin Login Modal */}
        <Modal show={showModal} closeModal={() => setShowModal(false)}>
          <Form onSubmit={submitHandler} style={{ width: "100%" }}>
            <Center>
              <h2>Login Here !</h2>
            </Center>
            <hr />
            <FormLabel>Email</FormLabel>
            <FormInputGroup>
              <FormInputIcon>
                <i className='fa-solid fa-envelope'></i>
              </FormInputIcon>
              <FormInput placeholder='Enter email' />
            </FormInputGroup>
            <FormLabel>Password</FormLabel>
            <FormInputGroup>
              <FormInputIcon>
                <i className='fa-solid fa-lock'></i>
              </FormInputIcon>
              <FormInput
                placeholder='Enter password'
                type={showPassword ? "text" : "password"}
              />
            </FormInputGroup>
            <FormCheck
              label='show password ?'
              checked={showPassword}
              onChange={handleShowPassword}
            />

            <Button type='submit' block className='mt-1'>
              Sign In
            </Button>
            <hr />
            <Center>
              <p>
                New Customer ? &nbsp;<Link to='/register'>Sign Up</Link>
              </p>
            </Center>
          </Form>
        </Modal>
        {/* End Login Modal */}
      </>
    );
  }
};

export default Header;
