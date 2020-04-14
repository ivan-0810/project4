import React from 'react';
import edukacija from "../../sliki/za_nas/edukacija.jpg";
import edukacija1 from "../../sliki/za_nas/edukacija1.jpg";
import edukacija2 from "../../sliki/za_nas/edukacija2.jpg";
import nastani from "../../sliki/za_nas/nastani.jpg";
import coworking from "../../sliki/za_nas/coworking.jpg";
import prostor_za_nastani from "../../sliki/za_nas/prostor za nastani.jpg";
import { Link } from "react-router-dom";


import "./Homepage.scss";


const HomepageZaNas = ({ setPartnerstvaForma,setInovaciiForma }) => {
  return (
    <div className="homepage-zanas">
        <h1>За Нас</h1>
        <a href="https://brainster.co/" className="homepage-zanas-card">
          <div className="img-div">
            <img src={edukacija} alt=""/>
          </div>
          <div className="txt-div">
          <h3>Едукација</h3>
          
            <p>Научи практични вештини за трансформација во кариерата. Нашата специјалност е да ти помогнеме да го најдеш правилниот skil set кој ќе одговори на реалните потреби на на пазарот на труд. Организираме курсеви, академии и персонализирани обуки кои одговараат на реалните потреби на денешницата.</p>
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </a>


        <Link to="/nastani" className="homepage-zanas-card">
          <div className="img-div">
            <img src={nastani} alt=""/>
          </div>
          <div className="txt-div">
          <h3>Настани</h3>
          
            <p>Специјално курирани и организирани настани кои ги поврзуваат правите таленти со иновативните компании. Идејата е да нашата tech заедница расте, се инсталира и креира преку овие настани.</p>
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </Link>


        <div className="homepage-zanas-card">
          <div className="img-div">
            <img src={coworking} alt=""/>
          </div>
          <div className="txt-div">
          <h3>Coworking</h3>
          
            <p>Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared Office. Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии.</p>
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </div>

        <Link to="/nastani" className="homepage-zanas-card">
          <div className="img-div">
            <img src={prostor_za_nastani} alt=""/>
          </div>
          <div className="txt-div">
          <h3>Просор за Настани</h3>
          
            <p>Имаш идеја за обука или настан од tech областа? Ние имаме простор за реализација. Нашиот тим внимателно ги одбира и крира сите настани.</p>
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </Link>

        <div className="homepage-zanas-card" onClick={() => setPartnerstvaForma(true)}>
          <div className="img-div">
            <img src={edukacija1} alt=""/>
          </div>
          <div className="txt-div">
          <h3>Парнерства со Tech компании</h3>
          
            <p>Целта и идејата е креирање на tech заедница која ќе се негува, расте и креира подобро утро за сите нас. Преку директно и индиректно поврзивање на  tech талентите со компаниите.</p>
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </div>

        <div className="homepage-zanas-card" onClick={()=>setInovaciiForma(true)}>
          <div className="img-div">
            <img src={edukacija2} alt=""/>
          </div>
          <div className="txt-div">
          <h3>Иновации за компании</h3>
          
            <p>Нов концепт кој ќе им помогне на компаниите да преминат од стариот во новиот начин на работење. Подгответе ја вашата компанија за дигитална трансформација.</p>
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </div>
        
    </div>
  );
}

export default HomepageZaNas;