import React, { useState, useEffect } from 'react';
import coworking from "../../sliki/za_nas/coworking.jpg";
import TextDiv from '../Prostor_za_nastani/TextDiv';

const HomepageCoworking = () => {
  const [mesto, setMesto] = useState(false);

  return (
    <div className="edukacija homepage-coworking">
      <div className="txt-div">
        <button className="sold-btn">sold out</button>
        <TextDiv
          h1="Coworking"
          text={["Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared office. Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секиј месецсо кого да ги дели своите канцеларии.</"]}
        />
        <button className="akademii" onClick={() => setMesto(!mesto)}>резервирај место</button>
        {mesto && <div style={{ width: "95%" }}><p className="p-text-timer">местата се распродадени</p></div>}
      </div>
      <div className="img-div">
        <img src={coworking} alt="coworking" />
      </div>

    </div>
  );
}

export default HomepageCoworking;