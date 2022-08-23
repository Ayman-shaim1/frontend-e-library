import React from "react";
import { Button, Center } from "../components";
import {
  Form,
  FormInput,
  FormInputGroupe,
  FormInputIcon,
  FormLabel,
  FormCheck,
} from "../components/Form";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Center className="my-5">
      <Form onSubmit={submitHandler}>
        <Center>
          <h1>Login Here !</h1>
        </Center>
        <hr />
        <FormLabel>Email</FormLabel>
        <FormInputGroupe>
          <FormInputIcon>
            <i className="fa-solid fa-envelope"></i>
          </FormInputIcon>
          <FormInput placeholder="Enter email" />
        </FormInputGroupe>
        <FormLabel>Password</FormLabel>
        <FormInputGroupe>
          <FormInputIcon>
            <i className="fa-solid fa-lock"></i>
          </FormInputIcon>
          <FormInput placeholder="Enter password" type="password" />
        </FormInputGroupe>
        <FormCheck label="hello world" />
        <Button type="submit" block className="my-1">
          <i className="fa-solid fa-arrow-right-to-bracket"></i> Sign In
        </Button>
        <hr />
        <Center>
          <p>
            New Customer ? &nbsp;<Link to="/register">Register</Link>
          </p>
        </Center>
      </Form>
    </Center>
  );
};

export default LoginPage;
