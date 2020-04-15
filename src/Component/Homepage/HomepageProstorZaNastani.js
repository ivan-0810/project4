import React, { Fragment } from 'react';
import ProstorZaNastani from "../../sliki/za_nas/prostor za nastani.jpg";
import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomepageProstorZaNastani = () => {
    return (
      <Fragment>
           <div className="edukacija ">
      <div className="txt-div">
          <div className="inside-txt-div">
              <h1>Едукација</h1>
              <p>Можност за презентација, обуки, конференции, networking, настани. Одбери ја просторијата која најмногу ќе одговара на твојата идеја. Го задржуваме правото да одбереме кој настан ќе се организира во нашиот Brainster Space.</p>
            

              <div className="btn-div">
                  <Link to="/nastani" className="akademii prostor-zanastani"><i className="fas fa-arrow-right"></i>види го просторот</Link>
    
              </div>
          </div>
      </div>
      <div className="img-div">
        <img src={ProstorZaNastani} alt="" />}
       
      </div>

  </div>
      <div className="partneri">
        <h1>Партнери</h1>
          <p>Имаш идеја? Отворени сме за соработка</p>
          <Link to="/nastani" className="akademii prostor-zanastani"><i className="fas fa-arrow-right"></i>види го просторот</Link>
      </div>
      </Fragment>
    );
  }
  
  export default HomepageProstorZaNastani;