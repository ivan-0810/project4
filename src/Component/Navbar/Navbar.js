import React, { useContext } from 'react';
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../sliki/brainster_space_logo.svg";
import { Context } from '../../Context/Context';
import NavbarBtnForma from "../NavbarBtnForma/NavbarBtnForma";
import '../NavbarBtnForma/NavbarBtnForma.scss';
import PartnerstvaForma from '../ParnerstvaForma/PartnerstvaForma';
import "../ParnerstvaForma/PartnerstvaForma.scss";

const Navbar = () => {
  const {setIsCoworking, setPartnerstvaForma, partnerstvaForma,setNavbarBtnForma, navbarBtnForma} = useContext(Context);

  return (
    <div className="nav-bar">
        {navbarBtnForma && <NavbarBtnForma/>}
        {partnerstvaForma && <PartnerstvaForma />}
        <Link to="/" className ="logo">
            <img src={Logo}alt="brainster-logo"/>
        </Link>
        <div className="navbar-links">
            <Link to="/space-blog">space блог</Link>
            <Link to="/nastani">настани</Link>
            <Link to="/" onClick={()=>setIsCoworking(true)}>co-working</Link>
            <Link to="/akademii">академии</Link>
            <Link to="/prostor_za_nastani">простор за настани</Link>
            <button onClick={() => setPartnerstvaForma(true)}>партнертсва</button>
        </div>
        <button className="navbar-btn" onClick={()=> setNavbarBtnForma(true)}><i className="fas fa-plus"></i>приклучи се</button>
    </div>
  );
}

export default Navbar;