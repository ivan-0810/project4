import React, { useState, Fragment } from 'react';
import edukacija1 from "../../sliki/za_nas/edukacija1.jpg";
import edukacija2 from "../../sliki/za_nas/edukacija2.jpg";
import "./HomePage.scss";

const Edukacija = () => {
    const [isAkademii, setIsAkademii] = useState(true)
    const [isZakompanii, setIsZakompanii] = useState(false);
    
    const changeAkademii = () => {
        setIsAkademii(true)
        setIsZakompanii(false)
    }
    const changeZakompanii = () => {
        setIsAkademii(false);
        setIsZakompanii(true);
    }
    return (
        <div className="edukacija">
            <div className="txt-div">
                <div className="inside-txt-div">
                    <h1>Едукација</h1>
                    {isAkademii && <p>Дали си подготвен да одговориш на потребите на иднината. Вистинските курсеви, академии и семинари кои ќе ти овозможат кариерна трансформација во областа дигитален маркетинг, дизајн, програмирање и Data Science.</p>}
                    {isZakompanii &&
                        <Fragment>
                            <p>Компаниите имаат можност да ги надоградат своите тимови, а со тоа да го подобрат перформансто на својата компанија. </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, sit repellat explicabo sint architecto autem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, sit repellat explicabo sint architecto autem.</p>
                        </Fragment>
                    }

                    <div className="btn-div">
                        <button className="akademii" onClick={changeAkademii}>академии</button>
                        <button className="za-kompanii" onClick ={changeZakompanii}>за компании</button>
                    </div>
                </div>
            </div>
            <div className="img-div">
                {isAkademii && <img src={edukacija1} alt="" />}
                {isZakompanii && <img src={edukacija2} alt="" />}
            </div>

        </div>
    );
}

export default Edukacija;
