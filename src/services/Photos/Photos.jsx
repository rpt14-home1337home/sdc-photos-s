import React from 'react';

// components
import Header from './components/Header/Header.jsx';
import Body from './components/Body/Body.jsx';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      displayAll: true,
    };
  }
  render() {
    return (
      <div>
        <Header callback={this.props.callback}/>
        <Body />
      </div>
    );
  }
}

export default Photos;
