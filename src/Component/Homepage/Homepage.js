import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import NavbarBtnForma from "../NavbarBtnForma/NavbarBtnForma";
import HomepageHeader from "../Homepage/HomepageHeader";
import HomepageZaNas from './HomepageZaNas';
const Homepage = () => {
    const [ navbarBtnForma, setNavbarBtnForma]= useState(false);
  return (
    <div className="homepage">
        <Navbar setNavbarBtnForma={setNavbarBtnForma} />
        {navbarBtnForma && <NavbarBtnForma setNavbarBtnForma={setNavbarBtnForma} />}
        <HomepageHeader />
        <HomepageZaNas />
    </div>
  );
}

export default Homepage;
