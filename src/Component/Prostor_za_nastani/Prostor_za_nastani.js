import React, { useState, Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Prostor_za_nastani.scss";
import TextDiv from './TextDiv';

const Prostor_za_nastani = () => {

    return (
        <Fragment>
            <Navbar />
            <div className="prostor-za-nastani">
            <div className="box-1">
                <div className="txt-div">
                    <TextDiv
                        h1="Простор за настани"
                        text={["Нашиот простор се прилагодува според потребите на вашиот настан. Седум различни простории и Space Kitchen.", "Наменски создадени да се прилагодуваат и менуваат во согласност со типот на настан кој го организирате.", "Организиеаме конференции до 150 учесници и обуки и предавања за групи од 20 учесници. Контактирај не за да ви хостираме одличен настан."]} />
                    <button><i className="fas fa-plus"></i> букирај не</button>
                </div>
                <div className="img-div" >
                    <img src={require(`../../sliki/za_nas/prostor za nastani.jpg`)} alt="" />
                </div>
            </div>
            <div className="box-2">
        
                    <div className="txt-div">
                    <TextDiv
                        h1="Нашите простории"
                        text={["Комплетно адаптибилни. Една сала за 150 учесници или три помали сали за групи од по 50 учесника. Училници од 25 до 40 учесника. Избор од две локации.", "Пулт за прием. И најважното место за networking- Brainster Kitchen.", "Како го замислувате вашиот следен настан?"]} />
                    </div>
                    <div className="img-div" >
                    <div><img src={require(`../../sliki/za_nas/prostor za nastani.jpg`)} alt="" /></div>
                </div>
                </div>
            
            </div>
        </Fragment>
    );
}

export default Prostor_za_nastani;