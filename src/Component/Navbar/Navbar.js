import React from 'react';
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../sliki/brainster_space_logo.svg";

const Navbar = ({setNavbarBtnForma, setPartnerstvaForma}) => {
  return (
    <div className="nav-bar">
        <Link to="/" className ="logo">
            <img src={Logo}alt="brainster-logo"/>
        </Link>
        <div className="navbar-links">
            <Link to="/space-blog" on>space блог</Link>
            <Link to="/nastani">настани</Link>
            <Link>co-working</Link>
            <Link>академии</Link>
            <Link to="/nastani">простор за настани</Link>
            <button onClick={() => setPartnerstvaForma(true)}>партнертсва</button>
        </div>
        <button className="navbar-btn" onClick={()=> setNavbarBtnForma(true)}><i className="fas fa-plus"></i>приклучи се</button>
    </div>
  );
}

export default Navbar;