import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import HeaderSection from "../components/HeaderSection";

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
    </>
  );
};

export default Home;
