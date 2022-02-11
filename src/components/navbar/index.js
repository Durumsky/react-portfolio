import React from "react";
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'


const Navbar = ({ toggle }) => {
  return (
    <>
    <Nav>
      <NavbarContainer>
        <NavbarLogo to="/">J. Escobedo</NavbarLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="signup">Sign Up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign in</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
    </>
  );
};


export default Navbar
