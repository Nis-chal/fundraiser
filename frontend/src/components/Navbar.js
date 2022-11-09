import React from "react";

import Container from "../styles/Navbar";
import Lo from "../assets/image/LOGO.png";
import NavLinks from "./Navlinks";
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = ({togglesidebar}) => {
  return (
    <Container>
      <nav className="navbar sticky">
        <div className="header">
          <img src={Lo} alt=""  />
          <NavLinks/>
        </div>

       
        <GiHamburgerMenu className="hamburger" onClick={togglesidebar}/>
        <button className="btn-submit">Launch Now</button>
      </nav>
    </Container>
  );
};

export default Navbar;
