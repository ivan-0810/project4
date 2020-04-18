import React, { Fragment } from 'react';
import planet from "../../sliki/planet-ringed.png";
import "./Prostor_za_nastani.scss";

const Box4 = () => {
    return (
    <Fragment>
        <h1>Нудиме</h1>
        <div className="span-div">
        <div className="planet">
            <div><img src={planet} alt=""/></div>
                <span> Простор</span></div>
        </div>
    </Fragment>
    );
  }
  
  export default Box4;