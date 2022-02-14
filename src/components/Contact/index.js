import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">José Escobedo</Icon>
          <FormContent>
            <FormContent>
              <Form action="#">
                <FormH1>Invite me to join your company</FormH1>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput type="email" required />
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput type="password" required />
                <FormButton type="submit">Continue</FormButton>
                <Text>Forgot your password</Text>
              </Form>
            </FormContent>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
