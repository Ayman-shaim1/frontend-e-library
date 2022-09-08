import React, { useEffect } from "react";
import { Row, Column, Center, Button, Loader } from "../components";
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
    <Loader size="sm"/>
      <Tabs height={500}>
        <Tab active title="Update Informations">
          <Row>
            <Column xl={12} lg={12} md={12} sm={12}>
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
                    <Button block>update</Button>
                  </Form>
                </FormContainer>
              </Center>
            </Column>
          </Row>
        </Tab>
        <Tab title="Update Password">
          <Center>
            <FormContainer>
              <Form>
                <FormLabel>Password</FormLabel>
                <FormInputGroup>
                  <FormInputIcon>
                    <i className="fa-solid fa-key"></i>
                  </FormInputIcon>
                  <FormInput placeholder="Enter password" type="password" />
                </FormInputGroup>
                <FormLabel>Email</FormLabel>
                <FormInputGroup>
                  <FormInputIcon>
                    <i className="fa-solid fa-key"></i>
                  </FormInputIcon>
                  <FormInput
                    placeholder="Enter confirm password"
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
