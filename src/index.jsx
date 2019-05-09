import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Navigation from './components/Navigation/Navigation.jsx';
import Splash from './components/Splash/Splash.jsx';
import Description from './components/Description/Description.jsx';
import Gallery from './components/Gallery/Gallery.jsx';

// delete later, for reference only
const endOfPage = {
  width: "100%",
  height: "480px",
  backgroundColor: "lightgoldenrodyellow",
  marginTop: "20px",
  float: "left",
}


const App = () => {
  return (
    <div>
      <Navigation />
      <Splash />
      <Description />
      <Gallery />

      {/* delete later, for reference only */}
      <div style={endOfPage}></div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
