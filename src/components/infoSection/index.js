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
  GitIcon
} from "./InfoElements";
import { Button } from "../ButtonElement";

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
  githubLink
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <SliderWrapper>
          {id === 'projects' && <SlidePrev primary={primary} dark={dark} onClick={()=> projectsSliderPrev()}/>}
          {id === 'education' && <SlidePrev primary={primary} dark={dark} onClick={()=> educationSliderPrev()}/>}
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>  
                </TextWrapper>
                
                <BtnWrap>
                    {id === 'projects' && 
                    <Button>Github <GitIcon/></Button>
                    }
                    <Button
                      to="home"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact={true}
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLabel}
                    </Button>
                  </BtnWrap>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
          {id === 'projects' && <SlideNext primary={primary} dark={dark} onClick={()=> projectsSliderNext()} />}
          {id === 'education' && <SlideNext primary={primary} dark={dark} onClick={()=> educationSliderNext()} />}
        </SliderWrapper>
      </InfoContainer>
    </>
  );
};

export default infoSection;
