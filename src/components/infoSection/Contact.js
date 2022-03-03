import React from "react";
import {
  SliderWrapper,
  SlidePrev,
  SlideNext,
  InfoContainerContact,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Heading2,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  GitIcon,
  ExtIcon,
} from "./InfoElements";
import { Button, ButtonExt } from "../Buttons";

const Contact = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  description,
  headline,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  projectsSliderNext,
  projectsSliderPrev,
  educationSliderNext,
  educationSliderPrev,
  github,
  githubLink,
  deploy,
  deployLink,
  certificate,
  certificateLink,
}) => {
  return (
    <>
      <InfoContainerContact lightBg={lightBg} id={id}>
          <InfoWrapper>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <Heading2 lightText={lightText}>You can find me also in</Heading2>
                  <Subtitle darkText={darkText}><a href="https://www.linkedin.com/in/jose-escobedo-bermudez/" target="blank">linkedin.com/in/jose-escobedo-bermudez/</a></Subtitle>
                </TextWrapper>
          </InfoWrapper>
      </InfoContainerContact>
    </>
  );
};

export default Contact;
