import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import SpaceBlogNavbar from "./SpaceBlogNavbar";
import SpaceblogHeader from './SpaceblogHeader';
import SpaceblogList from './SpaceblogList';
const SpaceBlog = (props) => {
    const data = require('../../myArr.json');
    const [mainData, setMainData] = useState(data)
    const [cardsToRender, setCardsToRender] = useState(data);

    
    const [filters, setFilters] = useState({
        КАРИЕРА: false,
        ТЕХНОЛОГИЈА: false,
        "DATA SCIENCE": false,
        МАРКЕТИНГ: false,
        ДИЗАЈН: false,
        IMPACT: false
    });
    const [allFilters, setAllFilters] = useState(true);

    useEffect(() => {
        let allFiltersThatAreActive = [];
          
          //simple for to iterate through objects
          for (let i in filters) {
            // console.log(i);
            // console.log(category[i]);
            if (filters[i]) {
              allFiltersThatAreActive.push(i);
            }
          }
        
 
          console.log(allFiltersThatAreActive);
          const filterKeys = Object.keys(allFiltersThatAreActive);
          
    let filteredCards = mainData.filter(eachCard => {
        
        return filterKeys.every(key => {
          if (!allFiltersThatAreActive[key].length) {
            return true;
          }

          return allFiltersThatAreActive[key].includes(eachCard.category[key])
    
        });
      });

      
      setCardsToRender(filteredCards);
      console.log(filteredCards);
    },[filters,mainData]);

    useEffect(() => {
        if (cardsToRender.length === mainData.length) {
          setAllFilters(true);
        }
      }, [cardsToRender.length, mainData]);

       //toggle active class on the filters buttons
  const toggleFilters = e => {
    let dataFilter = e.target.dataset.filter;
    //set the filters toggle / button active class
    setFilters(prevState => ({
        ...prevState,
        [dataFilter]: !prevState[dataFilter]
    }));

    setAllFilters(false);
  };

  const toggleAll = () => {
    setAllFilters(true);

    setFilters({
        КАРИЕРА: false,
        ТЕХНОЛОГИЈА: false,
        "DATA SCIENCE": false,
        МАРКЕТИНГ: false,
        ДИЗАЈН: false,
        IMPACT: false
    });     
  };

    return (
        <div>
            <Navbar />
            <SpaceBlogNavbar 
                toggleFilters={toggleFilters}
                filters={filters}
                allFilters={allFilters}
                toggleAll={toggleAll} />
            <SpaceblogHeader data={data} />
            <SpaceblogList data={cardsToRender} />
        </div>
    );
}

export default SpaceBlog;