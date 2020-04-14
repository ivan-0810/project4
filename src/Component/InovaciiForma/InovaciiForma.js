import React from 'react';
import "./InovaciiForma.scss";

const InovaciiForma = ({setInovaciiForma}) => {
  return (
    <div className="inovacii-forma">
       <div className="overlay">
                
                <form action="@">
                   <div className="form-box1">
                        <div className="label-input">
                        <label htmlFor="">Име и Презиме(задолжително)</label>
                        <input type="text" placeholder="Внесете Име и Презиме" />
                    </div>
                    <div className="label-input">
                        <label htmlFor="">Име и Компанија(незадолжително)</label>
                        <input type="text" placeholder="Внесете име на Вашата Компанија" />
                    </div>
                    <div className="label-input">
                        <label htmlFor="">Вашиот е-маил</label>
                        <input type="email" placeholder="Внесете го вашиот е-маил" />
                    </div>
                    
                    <div className="label-input">
                        <label htmlFor="">Телефонски Број(задолжително)</label>
                        <input type="number" placeholder="Внесете Телефонски Број" />
                    </div>
                   </div>
                    <div className="form-box2">
                    <div>
                        <label htmlFor="">Предлог за Соработка(незадолжително)<span>300</span></label>
                        
                        <textarea name="" id="" cols="30" rows="7" placeholder="Во 300 карактери,  опишете зошто сакате да соработуваме"></textarea>
                    </div>
            
                        <div className="btn-forma-div">
                        <button className="isprati" onClick={() => setInovaciiForma(false)}>исклучи</button>
                        <button type="submit"  className="priklucise"><i className="fas fa-arrow-right"></i>испрати форма</button>
                        </div>
                  
                    </div>
                </form>
            </div> 
    </div>
  );
}

export default InovaciiForma;