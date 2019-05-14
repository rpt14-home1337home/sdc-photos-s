import React from 'react';

// Components
import Navigation from './components/Navigation/Navigation.jsx';
import Splash from './components/Splash/Splash.jsx';
import Description from './components/Description/Description.jsx';
import Gallery from './components/Gallery/Gallery.jsx';

const Home = (props) => {
  return (
    <div>
      <Navigation />
      <Splash />
      <Description />
      <Gallery callback={props.callback} />
    </div>
  );
};

export default Home;