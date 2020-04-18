import React, { useState, Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Prostor_za_nastani.scss";
import TextDiv from './TextDiv';
import p1 from "../../sliki/renderi/2.jpg";
import p2 from "../../sliki/renderi/C1 1.jpg";
import p3 from "../../sliki/renderi/C1 4.jpg";
import p4 from "../../sliki/renderi/C2 1.jpg";
import p5 from "../../sliki/renderi/C3 1.jpg";
import p6 from "../../sliki/renderi/C3 2.jpg";
import p7 from "../../sliki/renderi/C3 EXIBITION_1.jpg";
import p8 from "../../sliki/renderi/HOL KON SEDENJE.jpg";
import p9 from "../../sliki/nastani/instruktori.jpg";

const Prostor_za_nastani = () => {
    const [nasloviSliki] = useState(["Brainster", "Конференциска Сала", "Сала со бина", "Адептибилна училница", "Училница", "Училница", "Хол", "Канцелариски простор", "Space Kitchen"]);
    const [sliki] = useState({
        1: p1,
        2: p5,
        3: p6,
        4: p4,
        5: p2,
        6: p3,
        7: p7,
        8: p8,
        9: p9
    })
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
                        {nasloviSliki.map((naslov, inx) => (
                            <div key={inx} >
                                <div className="image">
                                <img src={sliki[inx + 1]} alt={naslov} />
                                </div>
                                <p >{naslov}</p>
                            </div>


                        ))}
                    </div>


                </div>

            </div>
        </Fragment>
    );
}

export default Prostor_za_nastani;