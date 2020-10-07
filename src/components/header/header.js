import React, {useState} from 'react';
import './header.scss';

import LogoImg from '../../assets/logo-bookmark.svg'

const Header = ({ showPopup, showModal, openMenuMobile }) => {

  const [mouseOverIndex, setMouseOverIndex] = useState(true);
  const [activeCloseButton, setActiveCloseButton] = useState('');

  const toShowModalPopup = () => {
    if (mouseOverIndex) {
      showPopup(true);
      setMouseOverIndex(false)
    }
  }

  const toShowMenuMobile = () => {
    if(openMenuMobile){
      showModal(false);
      setActiveCloseButton('');
    } else {
      showModal(true);
      setActiveCloseButton('is-active');
    }
  }

  return (
    <header 
      className="header container"
      onMouseEnter={toShowModalPopup}
    >
      <div className="logo">
        <img src={ LogoImg } alt="logo-bookmark" className="logo_img"></img>
      </div>
      <div 
        className={`hamburger hamburger--3dx hamburger_mobile ${activeCloseButton}`}
        onClick={toShowMenuMobile}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
      <nav className="header_nav">
        <a className="header_nav-link" href="1">Features</a>
        <a className="header_nav-link" href="2">Pricing</a>
        <a className="header_nav-link" href="3">Contact</a>
        <button className="btn-login">LOGIN</button>
      </nav>
    </header>
  )
}

export default Header;