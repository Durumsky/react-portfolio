import React from "react";
import {
  InfoContainerContact,
  InfoWrapperContact,
  TextWrapper,
  TopLine,
  Heading,
  Heading2,
  Subtitle,
} from "./InfoElements";

const Contact = ({
  lightBg,
  id,
  topLine,
  lightText,
  darkText,
  description,
  headline,
}) => {
  return (
    <>
      <InfoContainerContact lightBg={lightBg} id={id}>
          <InfoWrapperContact>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <Heading2 lightText={lightText}>You can find me also in</Heading2>
                  <Subtitle darkText={darkText}><a href="https://www.linkedin.com/in/jose-escobedo-bermudez/" target="blank">linkedin.com/in/jose-escobedo-bermudez/</a></Subtitle>
                </TextWrapper>
          </InfoWrapperContact>
      </InfoContainerContact>
    </>
  );
};

export default Contact;
