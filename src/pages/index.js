import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import HeaderSection from "../components/HeaderSection";
import InfoSection from "../components/infoSection"
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/infoSection/Data"
import Projects from '../components/projects'
import Footer from '../components/footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeaderSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <Projects />
      <Footer />

    </>
  );
};

export default Home;
