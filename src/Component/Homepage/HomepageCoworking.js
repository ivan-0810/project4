import React, { useState, useEffect } from 'react';
import coworking from "../../sliki/za_nas/coworking.jpg";

const HomepageCoworking = () => {
  const [mesto, setMesto ] = useState(false);

    return (
      <div className="edukacija homepage-coworking">
            <div className="txt-div">
                <div className="inside-txt-div">
                  <button className="sold-btn">sold out</button>
                    <h1>Coworking</h1>
                <p>Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared office. Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секиј месецсо кого да ги дели своите канцеларии.</p>
                
                        <button className="akademii" onClick={()=> setMesto(!mesto)}>резервирај место</button>
                     
                    </div>
                    {mesto && <div style={{width:"95%"}}><p className="p-text-timer">местата се распродадени</p></div>}
            </div>
            <div className="img-div">
             
              <img src={coworking} alt="" />
            </div>

        </div>
    );
  }
  
  export default HomepageCoworking;