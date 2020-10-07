import React, { useState, useEffect } from 'react';

import modalImg from '../../assets/illustration-features-tab-1.svg';
import './popup.scss';

const Popup = ({openPopup, showPopup}) => {

  const [modalActive, setModalActive] = useState('');

  const closeModal = () => {
    setModalActive('');
    showPopup(false);
  };

  const showModal = () => {
    const timerToShow = setTimeout(()=>{ setModalActive('modal_active') }, 30000)
    return () => clearInterval(timerToShow);
  };

  useEffect(() => {
    if(openPopup) {
      setModalActive('modal_active')
    }
    showModal();
  }, [modalActive, openPopup]);

  return (
    <aside className={`modal_tab ${modalActive}`}>
      <span 
        className="close" 
        title="close"
        onClick={closeModal}
      >✕</span>
        <div className="tab_content modal_tab-card">
          <div className="tab_content__img-wrapper modal_tab_content__img-wrapper">
            <img className="tab_content__img" src={modalImg} alt="illustration-features-tab"></img>
          </div>
          <div className="tab_content__info-wrapper">
            <h1 className="tab_content__header">Bookmark in one klick</h1>
            <p className="tab_content__info-text">A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className="btn_wrapper">
              <button className="btn_browser btn_browser-chrome modal_tab__btn">More info</button>
            </div>
          </div>
        </div>
    </aside>
  )
};

export default Popup;