import React from 'react';
import "./Spaceblog.scss";

const SpaceBlogNavbar = ({toggleFilters, filters, allFilters, toggleAll}) => {
    return (
      <div className="spaceblog-navbar">
          <p>филтрирај</p>
          <button 
                className={allFilters ? 'active' : null} 
                onClick={toggleAll}
          >сите</button>
          <button
                className={filters.КАРИЕРА ? 'active' : null}
                data-filter="КАРИЕРА"
                onClick={toggleFilters}
          >кариера</button>
          <button 
          className={filters.ТЕХНОЛОГИЈА ? 'active' : null}
          data-filter="ТЕХНОЛОГИЈА"
          onClick={toggleFilters}
          >технологија</button>
          <button
           className={filters.tehnologija ? 'active' : null}
           data-filter="DATA SCIENCE"
           onClick={toggleFilters}
          >Data Science</button>
          <button 
          className={filters.МАРКЕТИНГ ? 'active' : null}
          data-filter="МАРКЕТИНГ"
          onClick={toggleFilters}
          >маркетинг</button>
          <button
          className={filters.ДИЗАЈН ? 'active' : null}
          data-filter="ДИЗАЈН"
          onClick={toggleFilters}
          >дизајн</button>
          <button
          className={filters.IMPACT ? 'active' : null}
          data-filter="IMPACT"
          onClick={toggleFilters}
          >impact</button>
          <a href="https://medium.com/wearelaika/brainster-space-the-new-home-of-the-local-tech-community-in-skopje-ffe97b564152">#SpaceFamily</a>
      </div>
    );
  }
  
  export default SpaceBlogNavbar;