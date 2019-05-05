import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation/Navigation.jsx';

const App = () => {
  return (
      <Navigation/>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));