import React from 'react';
import './Splash.css';

// Components
import Logo from './Sub-Components/Logo.jsx';
import Text from './Sub-Components/Text.jsx';
import Image from './Sub-Components/Image.jsx';
import HeartButton from './Sub-Components/HeartButton.jsx';

const tourIcon = "M 3 7.5 a 1.5 1.5 0 1 1 -3 0 a 1.5 1.5 0 0 1 3 0 Z m 12.75 0 a 0.75 0.75 0 0 1 -0.75 0.75 H 6 a 0.75 0.75 0 0 1 0 -1.5 h 9 a 0.75 0.75 0 0 1 0.75 0.75 Z m -10.5 -6 A 0.75 0.75 0 0 1 6 0.75 h 9 a 0.75 0.75 0 0 1 0 1.5 H 6 a 0.75 0.75 0 0 1 -0.75 -0.75 Z m 10.5 12 a 0.75 0.75 0 0 1 -0.75 0.75 H 6 a 0.75 0.75 0 0 1 0 -1.5 h 9 a 0.75 0.75 0 0 1 0.75 0.75 Z M 3 1.5 a 1.5 1.5 0 1 1 -2.999 0.001 A 1.5 1.5 0 0 1 3 1.5 Z m 0 12 a 1.5 1.5 0 1 1 -3 0 a 1.5 1.5 0 0 1 3 0 Z"

const Splash = () => {
  return (
    <div>
      <div className="left-splash">
        <div className="left-splash-inner">
          <Logo />
          <Text />
        </div>
      </div>

      <div className="right-splash">
        <Image />
        <HeartButton />
        <div className="tour-button-div">
          <button className="tour-button">
            <div>
              <svg viewBox="0 0 16 16" className="tour-icon">
                <path d={tourIcon}/>
              </svg>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Splash;
