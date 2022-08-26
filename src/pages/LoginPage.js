import React, { useState } from "react";
import { Button, Center } from "../components";
import {
  Form,
  FormInput,
  FormInputGroup,
  FormInputIcon,
  FormLabel,
  FormCheck,
} from "../components/Form";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const handleShowPassword = (event) => {
    setShowPassword(event.target.checked);
  };
  return (
    <Center className="my-5">
      <Form onSubmit={submitHandler}>
        <Center>
          <h1>Login Here !</h1>
        </Center>
        <hr />
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
          <FormInput
            placeholder="Enter password"
            type={showPassword ? "text" : "password"}
          />
        </FormInputGroup>
        <FormCheck
          label="show password ?"
          checked={showPassword}
          onChange={handleShowPassword}
        />

        <Button type="submit" block className="mt-1">
          Sign In
        </Button>
        <hr />
        <Center>
          <p>
            New Customer ? &nbsp;<Link to="/register">Sign Up</Link>
          </p>
        </Center>
      </Form>
    </Center>
  );
};

export default LoginPage;
