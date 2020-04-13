import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import NavbarBtnForma from "../NavbarBtnForma/NavbarBtnForma";

const Homepage = () => {
    const [ navbarBtnForma, setNavbarBtnForma]= useState(false);
  return (
    <div className="homepage">
        <Navbar setNavbarBtnForma={setNavbarBtnForma} />
        {navbarBtnForma && <NavbarBtnForma setNavbarBtnForma={setNavbarBtnForma} />}
    </div>
  );
}

export default Homepage;
