import React from "react";
import { Button, Center } from "../components";
import {
  Form,
  FormInput,
  FormInputGroup,
  FormInputIcon,
  FormLabel,
} from "../components/Form";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Center>
      <Form onSubmit={submitHandler}>
        <Center>
          <h1>Register Here !</h1>
        </Center>
        <hr />

        <FormLabel>Username</FormLabel>
        <FormInputGroup>
          <FormInputIcon>
            <i className="fa-solid fa-user"></i>
          </FormInputIcon>
          <FormInput placeholder="Enter username" />
        </FormInputGroup>
        <FormLabel>Email</FormLabel>
        <FormInputGroup>
          <FormInputIcon>
            <i className="fa-solid fa-envelope"></i>
          </FormInputIcon>
          <FormInput placeholder="Enter email" />
        </FormInputGroup>
        <FormLabel>Password</FormLabel>
        <FormInputGroup>
          <FormInputIcon>
            <i className="fa-solid fa-lock"></i>
          </FormInputIcon>
          <FormInput placeholder="Enter password" type="password" />
        </FormInputGroup>
        <FormLabel>Confirm Password</FormLabel>
        <FormInputGroup>
          <FormInputIcon>
            <i className="fa-solid fa-lock"></i>
          </FormInputIcon>
          <FormInput placeholder="Enter confirm password" type="password" />
        </FormInputGroup>
        <small>
          <i className="fa-solid fa-warning text-main-color"></i> Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Quidem, quia!
        </small>
        <Button type="submit" block className="my-1">
          <i className="fa-solid fa-user-plus"></i> Sign Up
        </Button>
        <hr />
        <Center>
          <p>
            Already have an account ? <Link to="/Login">Sign In</Link>
          </p>
        </Center>
      </Form>
    </Center>
  );
};

export default RegisterPage;