import React from "react";
import Footer from '../Footer'

import {
  TheContact,
  ContactTitle,
  TitleSpan,
  Form,
  FormContainer,
  InputText,
  InputEmail,
  InputSub,
  TextArea,
  InputSubmit
} from "./style";

const Contact = () => {
  return (
    <React.Fragment>
    <TheContact>
      <div class="container">
        <ContactTitle>
          <TitleSpan>Drop </TitleSpan>Me A line
        </ContactTitle>
        <Form action="">
          <FormContainer>
            <InputText type="text" placeholder="Your Name" />
            <InputEmail type="email" placeholder="Your Email" />
          </FormContainer>
          <InputSub type="text"  placeholder="Your Subject" />
          <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
          <InputSubmit type="submit" value="Send Message" />
        </Form>
      </div>
    </TheContact>
    <Footer/>
    </React.Fragment>
  );
};

export default Contact;
