import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Navigation from './components/Navigation/Navigation.jsx';
import Splash from './components/Splash/Splash.jsx';
import Description from './components/Description/Description.jsx';

const App = () => {
  return (
    <div>
      <Navigation />
      <Splash />
      <Description />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
