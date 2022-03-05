import React from "react";
import {
  SliderWrapper,
  SlidePrev,
  SlideNext,
  InfoContainerAbout,
  InfoWrapperAbout,
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

const AboutMe = ({
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
      <InfoContainerAbout lightBg={lightBg} id={id}>
          <InfoWrapperAbout>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <Heading2 lightText={lightText}>What I am looking for</Heading2>
                  <Subtitle darkText={darkText}>I would be very motivated to work in a company that:<br/><br/>

<li>secures a <b>good onboarding</b> and has experience with junior developers</li><br/>
<li>promotes the <b>continuous learning</b> of their employees</li><br/>
<li>has <b>meaningful</b> projects</li><br/>
<li>works with <b>React</b> in its frontend</li>
                  </Subtitle>
                </TextWrapper>
                <BtnWrap>
                </BtnWrap>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} imgStart={imgStart} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapperAbout>
      </InfoContainerAbout>
    </>
  );
};

export default AboutMe;
