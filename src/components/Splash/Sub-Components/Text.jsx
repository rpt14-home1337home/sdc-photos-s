import React from 'react';

class Text extends React.Component {
  constructor() {
    super();
    this.state = {
      splashText: '',
    };
  }
  render() {
    return (
      <div className="splash-text">
        <span>Modern, Chic Penthouse with Mountain, City, & Sea Views</span>
      </div>
    );
  }
}

export default Text;
