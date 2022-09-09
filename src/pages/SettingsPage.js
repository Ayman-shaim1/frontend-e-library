import React, { useEffect } from "react";
import { Center, Button } from "../components";
import { Tabs, Tab } from "../components/Tabs";
import {
  FormInputGroup,
  FormInputIcon,
  FormLabel,
  FormInput,
  Form,
  FormContainer,
} from "../components/Form";
// import { Alert } from "../utils";
const SettingsPage = () => {
  useEffect(() => {});

  return (
    <>
      <Tabs height={500}>
        <Tab active title="Update Informations">
          <Center>
            <FormContainer>
              <Form>
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
                <Button block loading={false}>
                  update
                </Button>
              </Form>
            </FormContainer>
          </Center>
        </Tab>
        <Tab title="Update Password">
          <Center>
            <FormContainer>
              <Form>
                <FormLabel>Current password</FormLabel>
                <FormInputGroup>
                  <FormInputIcon>
                    <i className="fa-solid fa-key"></i>
                  </FormInputIcon>
                  <FormInput
                    placeholder="Enter current password"
                    type="password"
                  />
                </FormInputGroup>
                <FormLabel>New Password</FormLabel>
                <FormInputGroup>
                  <FormInputIcon>
                    <i className="fa-solid fa-key"></i>
                  </FormInputIcon>
                  <FormInput placeholder="Enter new password" type="password" />
                </FormInputGroup>
                <FormLabel>Confirm new password </FormLabel>
                <FormInputGroup>
                  <FormInputIcon>
                    <i className="fa-solid fa-key"></i>
                  </FormInputIcon>
                  <FormInput
                    placeholder="Enter confirm new password"
                    type="password"
                  />
                </FormInputGroup>
                <Button block>update</Button>
              </Form>
            </FormContainer>
          </Center>
        </Tab>
      </Tabs>
    </>
  );
};

export default SettingsPage;
