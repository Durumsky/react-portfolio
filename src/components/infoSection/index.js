import React from "react";
import {
  SliderWrapper,
  SlidePrev,
  SlideNext,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  GitIcon,
  ExtIcon,
} from "./InfoElements";
import { Button, ButtonExt } from "../Buttons";

const infoSection = ({
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
      <InfoContainer lightBg={lightBg} id={id}>
        <SliderWrapper>
          {id === "projects" && (
            <SlidePrev
              primary={primary}
              dark={dark}
              onClick={() => projectsSliderPrev()}
            />
          )}
          {id === "education" && (
            <SlidePrev
              primary={primary}
              dark={dark}
              onClick={() => educationSliderPrev()}
            />
          )}
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                </TextWrapper>

                <BtnWrap>
                  {github && (
                    <ButtonExt href={githubLink} target="_blank" primary={primary} dark={dark}>
                      Github <GitIcon />
                    </ButtonExt>
                  )}
                  {deploy && (
                    <ButtonExt href={deployLink} target="_blank" primary={primary} dark={dark}>
                      Visit <ExtIcon />
                    </ButtonExt>
                  )}
                  {certificate && (
                    <ButtonExt href={certificateLink} target="_blank" primary={primary} dark={dark}>
                      Certificate <ExtIcon />
                    </ButtonExt>
                  )}
                </BtnWrap>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} imgStart={imgStart} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
          {id === "projects" && (
            <SlideNext
              primary={primary}
              dark={dark}
              onClick={() => projectsSliderNext()}
            />
          )}
          {id === "education" && (
            <SlideNext
              primary={primary}
              dark={dark}
              onClick={() => educationSliderNext()}
            />
          )}
        </SliderWrapper>
      </InfoContainer>
    </>
  );
};

export default infoSection;
