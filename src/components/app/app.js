import React, { useState } from 'react';
import Bookmark from '../bookmark';
import Contact from '../contact';
import Extention from '../extention';
import Features from '../features';
import Footer from '../footer';
import Header from '../header/';
import MenuMobile from '../menuMobile';
import Popup from '../popup/';
import Questions from '../questions/';
import './app.scss';

const App = () => {

  const [openPopup, setOpenPopup] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const showPopup = (openIndex) => {
    setOpenPopup(openIndex)
  };

  const showModal = (openIndex) => {
    setOpenMenuMobile(openIndex)
  }

  return (
    <>
      <Header 
        showPopup={showPopup} 
        showModal={showModal}
        openMenuMobile={openMenuMobile}
      />
      <Bookmark />
      <Features />
      <Extention />
      <Questions />
      <Contact />
      <Footer />
      <Popup 
        openPopup={openPopup}  
        showPopup={showPopup}
      />
      <MenuMobile 
        openMenuMobile={openMenuMobile} 
      />
    </>
  );
};

export default App;