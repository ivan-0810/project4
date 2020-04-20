import React, { useContext } from 'react';
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../sliki/brainster_space_logo.svg";
import { Context } from '../../Context/Context';

const Navbar = () => {
  const {setPartnerstvaForma,setNavbarBtnForma} = useContext(Context)
  return (
    <div className="nav-bar">
        <Link to="/" className ="logo">
            <img src={Logo}alt="brainster-logo"/>
        </Link>
        <div className="navbar-links">
            <Link to="/space-blog">space блог</Link>
            <Link to="/nastani">настани</Link>
            <Link to="/coworking">co-working</Link>
            <Link to="/akademii">академии</Link>
            <Link to="/prostor_za_nastani">простор за настани</Link>
            <button onClick={() => setPartnerstvaForma(true)}>партнертсва</button>
        </div>
        <button className="navbar-btn" onClick={()=> setNavbarBtnForma(true)}><i className="fas fa-plus"></i>приклучи се</button>
    </div>
  );
}

export default Navbar;