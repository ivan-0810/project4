import React, { useState, useContext } from 'react';
import Navbar from "../Navbar/Navbar";
import NavbarBtnForma from "../NavbarBtnForma/NavbarBtnForma";
import HomepageHeader from "../Homepage/HomepageHeader";
import HomepageZaNas from './HomepageZaNas';
import PartnerstvaForma from "../ParnerstvaForma/PartnerstvaForma";
import InovaciiForma from "../InovaciiForma/InovaciiForma";
import Edukacija from './Edukacija';
import HomepageNastani from "./HomepageNastani";
import HomepageCoworking from './HomepageCoworking';
import HomepageProstorZaNastani from "./HomepageProstorZaNastani"
import Footer from '../footer/Footer';
import { Context } from '../../Context/Context';

const Homepage = () => {
  const {partnerstvaForma, navbarBtnForma } = useContext(Context)

    const [inovaciiForma, setInovaciiForma] =useState(false)
  return (
    <div className="homepage">
        <Navbar  />
        {navbarBtnForma && <NavbarBtnForma/>}
        {partnerstvaForma && <PartnerstvaForma />}
        {inovaciiForma && <InovaciiForma setInovaciiForma={setInovaciiForma} />}
        <HomepageHeader />
        <div className="homepage-cont">
        <HomepageZaNas  setInovaciiForma={setInovaciiForma} />
        <Edukacija />
        <HomepageNastani />
        <HomepageCoworking />
        <HomepageProstorZaNastani />
        <Footer />
        </div>
    </div>
  );
}

export default Homepage;
