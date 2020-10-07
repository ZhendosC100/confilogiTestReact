import React from 'react';

const TabsTitleItem = ({title, index, openTab, active}) => {
  return (
    <div className={`tab ${index === active ? 'tab_active' : ''}`}>
      <p 
        className="tab_header"
        data-index={index}
        onClick={openTab}
      >{ title }</p>
      <div className="tab_border"></div>
    </div>
  )
};

export default TabsTitleItem;