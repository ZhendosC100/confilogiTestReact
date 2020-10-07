import React from 'react';

import './features.scss';
import Tabs from './tabs';

const Features = () => {
  
    return(
      <div className="features container">
        <div className="features_description-wrapper">
          <h3>Features</h3>
          <p className="features_description">
            Our aim it to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.
          </p>
        </div>
        <Tabs />
      </div>
    )
};

export default Features;