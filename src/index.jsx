import React from 'react';
import ReactDOM from 'react-dom';

// Services
import Home from './services/Home/Home.jsx';
import Photos from './services/Photos/Photos.jsx';

// delete later, for reference only
// const endOfPage = {
//   width: "100%",
//   height: "480px",
//   backgroundColor: "lightgoldenrodyellow",
//   marginTop: "20px",
//   float: "left",
// }

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
