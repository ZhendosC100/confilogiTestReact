import React from 'react';

const TabContent = ({tabContent}) => {
  const {imgLink, title, content} = tabContent;
  return (
    <>
      <div className="tab_content">
        <div className="tab_content__img-wrapper">
          <img className="tab_content__img" src={ imgLink } alt="illustration-features-tab"></img>
        </div>
    
        <div className="tab_content__info-wrapper">
          <h1 className="tab_content__header">{ title }</h1>
          <p className="tab_content__info-text">{content}</p>
          <div className="btn_wrapper">
            <button className="btn_browser btn_browser-chrome">More info</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabContent;