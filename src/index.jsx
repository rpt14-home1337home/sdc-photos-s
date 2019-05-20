import React from 'react';
import ReactDOM from 'react-dom';

// Services
import Home from './services/Home/Home.jsx';
import Photos from './services/Photos/Photos.jsx';

// GET PHOTOS HERE, SO YOU CAN PASS TO MAIN PAGE, PHOTO GALLERY PAGE, AND PHOTO DETAILS PAGE

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isHome: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isHome: !this.state.isHome,
    });
  }

  render() {
    if (this.state.isHome) {
      return <Home callback={this.onClick} />;
    } else {
      return <Photos callback={this.onClick} />;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
