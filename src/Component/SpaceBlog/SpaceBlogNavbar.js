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
                className={filters.КАРИ ? 'active' : null}
                data-filter="КАРИ"
                onClick={toggleFilters}
          >кариера</button>
          <button 
          className={filters.ТЕХН ? 'active' : null}
          data-filter="ТЕХН"
          onClick={toggleFilters}
          >технологија</button>
          <button
           className={filters.DATA ? 'active' : null}
           data-filter="DATA"
           onClick={toggleFilters}
          >Data Science</button>
          <button 
          className={filters.МАРК ? 'active' : null}
          data-filter="МАРК"
          onClick={toggleFilters}
          >маркетинг</button>
          <button
          className={filters.ДИЗА ? 'active' : null}
          data-filter="ДИЗА"
          onClick={toggleFilters}
          >дизајн</button>
          <button
          className={filters.IMPA ? 'active' : null}
          data-filter="IMPA"
          onClick={toggleFilters}
          >impact</button>
          <a href="https://medium.com/wearelaika/brainster-space-the-new-home-of-the-local-tech-community-in-skopje-ffe97b564152">#SpaceFamily</a>
      </div>
    );
  }
  
  export default SpaceBlogNavbar;