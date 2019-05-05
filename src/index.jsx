import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Navigation from './components/Navigation/Navigation.jsx';
import Splash from './components/Splash/Splash.jsx';

const App = () => {
  return (
    <div>
      <Navigation/>
      <Splash/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));