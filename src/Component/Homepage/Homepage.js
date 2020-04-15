import React, { useState } from 'react';
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
const Homepage = () => {
    const [ navbarBtnForma, setNavbarBtnForma]= useState(false);
    const [ partnerstvaForma, setPartnerstvaForma] = useState(false);
    const [inovaciiForma, setInovaciiForma] =useState(false)
  return (
    <div className="homepage">
        <Navbar setNavbarBtnForma={setNavbarBtnForma} setPartnerstvaForma={setPartnerstvaForma} />
        {navbarBtnForma && <NavbarBtnForma setNavbarBtnForma={setNavbarBtnForma} />}
        {partnerstvaForma && <PartnerstvaForma  setPartnerstvaForma={setPartnerstvaForma}/>}
        {inovaciiForma && <InovaciiForma setInovaciiForma={setInovaciiForma} />}
        <HomepageHeader />
        <HomepageZaNas  setPartnerstvaForma={setPartnerstvaForma} setInovaciiForma={setInovaciiForma} />
        <Edukacija />
        <HomepageNastani />
        <HomepageCoworking />
        <HomepageProstorZaNastani />
        <Footer />
    </div>
  );
}

export default Homepage;
