import React from 'react';
import './Splash.css';

// Components
import Logo from './Sub-Components/Logo.jsx';
import Text from './Sub-Components/Text.jsx';
import Image from './Sub-Components/Image.jsx';
import HeartButton from './Sub-Components/HeartButton.jsx';

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
      </div>
    </div>
  );
};

export default Splash;
