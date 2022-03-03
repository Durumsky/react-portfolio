import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import HeaderSection from "../components/HeaderSection";
import InfoSection from "../components/infoSection";
import AboutMe from "../components/infoSection/AboutMe";
import { projects, education, aboutMe, contact } from "../components/infoSection/Data";
import Contact from "../components/infoSection/Contact";
import Footer from "../components/footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [counterProjects, setCounterProjects] = useState(0);
  const [counterEducation, setCounterEducation] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const projectsSliderNext = () => {
    counterProjects < projects.length - 1
      ? setCounterProjects(() => counterProjects + 1)
      : setCounterProjects(() => 0);
  };

  const projectsSliderPrev = () => {
    counterProjects > 0
      ? setCounterProjects(() => counterProjects - 1)
      : setCounterProjects(() => 2);
    console.log(counterProjects);
  };

  const educationSliderNext = () => {
    counterEducation < education.length - 1
      ? setCounterEducation(() => counterEducation + 1)
      : setCounterEducation(() => 0);
  };

  const educationSliderPrev = () => {
    counterEducation > 0
      ? setCounterEducation(() => counterEducation - 1)
      : setCounterEducation(() => 2);
    console.log(counterEducation);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeaderSection />
      <InfoSection
        {...projects[counterProjects]}
        projectsSliderNext={projectsSliderNext}
        projectsSliderPrev={projectsSliderPrev}
      />
      <InfoSection
        {...education[counterEducation]}
        educationSliderNext={educationSliderNext}
        educationSliderPrev={educationSliderPrev}
      />
      <AboutMe {...aboutMe} />
      <Contact {...contact}/>
      <Footer />
    </>
  );
};

export default Home;
