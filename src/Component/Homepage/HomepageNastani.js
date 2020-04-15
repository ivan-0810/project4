import React from 'react';
import Nastani from "../../sliki/nastani/Hristijan-Nosecka-1024x536.jpg";
import Nastani1 from "../../sliki/nastani/IMG_7481.jpg";
import Nastani2 from "../../sliki/nastani/instruktori.jpg";
import "./HomePage.scss";
import { Link } from "react-router-dom";


const HomepageNastani = () => {
    return (
      <div className="homepage-zanas">
      <h1>Настани</h1>
        <a href="https://brainster.co/" className="homepage-zanas-card">
          <div className="img-div">
            <img src={Nastani} alt=""/>
          </div>
          <div className="txt-div">
          <h3>Codeworks</h3>
          
            <p>Вистинскиот настан за сите tech таленти кои сакаат да кодираат и да научат што е ново во tech заедницата. Настан кој ги побрзува mid програмерите со IT  компаниите. <br /> Deep Dive Intensive Seminar <br /> Ексклузивни семинари кои комбинираат три различни техники на учење.</p>
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </a>
        <a href="https://brainster.co/" className="homepage-zanas-card">
          <div className="img-div">
            <img src={Nastani1} alt=""/>
          </div>
          <div className="txt-div">
          <h3>Deep Dive into Marketing</h3>
          
            <p>Deep Dive into Marketing се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени, предизвици и идните трендови во областа во маркетингот.</p>
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </a>
        <a href="https://brainster.co/" className="homepage-zanas-card">
          <div className="img-div">
            <img src={Nastani2} alt=""/>
          </div>
          <div className="txt-div">
          <h3>Deep Dive into Science</h3>
          
            <p>Deep Div into Science се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени, предизвици и идните трендови во областа во Data Science</p>
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </a>
        <div className="div-kalendarKopce">
        <Link to="/nastani" className ="kalendarKopce"><i className="far fa-calendar-alt"></i> календари на настани</Link>
        </div>
      </div>
    );
  }
  
  export default HomepageNastani;