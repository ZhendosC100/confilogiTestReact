import React, { Component } from 'react';

import BookmarkImg from '../../assets/illustration-hero.svg'
import './bookmark.scss';

export default class Bookmark extends Component {
  render(){
    return(
      <div className="bookmark container">
        <div className="bookmark_img-wrapper">
          <img className="bookmark_img" src={ BookmarkImg } alt="illustration-hero"></img>
        </div>

        <div className="bookmark_info-wrapper">
          <h1 className="bookmark_header">A Simple Bookmark Manager</h1>
          <p className="bookmark_info-text">A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
          <div className="btn_wrapper">
            <button className="btn_browser btn_browser-chrome">Get it on Chrome</button>
            <button className="btn_browser btn_browser-firefox">Get it on Firefox</button>
          </div>
        </div>
      </div>
    );
  }
} 