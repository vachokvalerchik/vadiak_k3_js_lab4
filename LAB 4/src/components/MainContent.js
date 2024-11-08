import React from 'react';

const MainContent = ({ onHideContent }) => {
  return (
    <div className="main-content">
      <h1>Ball shopp</h1>
      <p>This store gives you the opportunity to buy a ball of any size and any color.</p>
      <button className="learn-more" onClick={onHideContent}>View the assortment</button>
    </div>
  );
};

export default MainContent;
