import styled from "styled-components";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  height: 100vh;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoContainerContact = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  height: 100%;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  //padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  //padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  //padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 20px;
`;

export const TopLine = styled.p`
  color: #3fb5ca;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 28px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 23px;
  }
`;
export const Heading2 = styled.h1`
  margin-bottom: 24px;
  margin-top: 24px;
  font-size: 23px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

`;

export const Subtitle = styled.p`
  /* max-width: 440px; */
  white-space: pre-wrap;
  font-size: 18px;
  line-height: 22px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  padding-right: ${({ imgStart }) =>
    imgStart ? '15px' : '0'};
  padding-left: ${({ imgStart }) =>
    imgStart ? '0' : '15px'};
  ;
`;

export const SliderWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SlideNext = styled(MdKeyboardArrowRight)`
  font-weight: bold;
  min-width: 30px;
  margin-left: 4%;
  border-radius: 50%;
  background: ${({ primary }) => (primary ? "#3FB5CA" : "#010606")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: 30px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#3FB5CA")};
  }
`;

export const SlidePrev = styled(MdKeyboardArrowLeft)`
  font-weight: bold;
  min-width: 30px;
  margin-right: 4%;
  border-radius: 50%;
  background: ${({ primary }) => (primary ? "#3FB5CA" : "#010606")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: 30px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#3FB5CA")};
  }
`;

export const GitIcon = styled(BsGithub)`
  font-weight: bold;
  min-width: 30px;
  margin-left: 5px;
  font-size: 25px;
`;

export const ExtIcon = styled(FiExternalLink)`
  font-weight: bold;
  min-width: 30px;
  margin-left: 5px;
  font-size: 25px;
`;




