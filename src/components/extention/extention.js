import React, { Component } from 'react';

import ChromeIcon from '../../assets/logo-chrome.svg';
import FirefoxIcon from '../../assets/logo-firefox.svg';
import OperaIcon from '../../assets/logo-opera.svg';
import './extention.scss';

export default class Extention extends Component {
  render(){
    return(
      <div className="extention container">
        <div className="extention_description-wrapper">
          <h3>Download the extention</h3>
          <p className="extention_description">
            We've got more browsers in the pipeline.
            Please do let us know if you've got a favorite you'd like us to prioritize.
          </p>
        </div>

        <div className="extention_cards-wrapper">
          <div className="card">
            <div className="card_logo-wrapper">
              <img className="card_logo" src={ ChromeIcon } alt="logo chrome"></img>
            </div>
            <h4 className="card_header">Add to Chrome</h4>
            <p className="card_description">Minimum version 62</p>
            <button className="card_btn">Add &amp; Install Extention</button>
          </div>
          <div className="card">
            <div className="card_logo-wrapper">
              <img className="card_logo" src={ FirefoxIcon } alt="logo firefox"></img>
            </div>
            <h4 className="card_header">Add to Firefox</h4>
            <p className="card_description">Minimum version 55</p>
            <button className="card_btn">Add &amp; Install Extention</button>
          </div>
          <div className="card">
            <div className="card_logo-wrapper">
              <img className="card_logo" src={ OperaIcon } alt="logo opera"></img>
            </div>
            <h4 className="card_header">Add to Opera</h4>
            <p className="card_description">Minimum version 46</p>
            <button className="card_btn">Add &amp; Install Extention</button>
          </div>
        </div>
      </div>
    );
  }
} 