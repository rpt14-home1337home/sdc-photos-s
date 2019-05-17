import React from 'react';
import './Body.css';

// components
import PhotoStrip from './Sub-Components/PhotoStrip.jsx';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <div className="body-container">
        <div className="body-title">All rooms</div>
        <PhotoStrip
          title="Living Room"
          photos={['photo1', 'photo2', 'photo3', 'photo4', 'photo5']}
        />
        <PhotoStrip
          title="Full Kitchen"
          photos={['photo1', 'photo2', 'photo3', 'photo4']}
        />
        <PhotoStrip
          title="Bedroom"
          photos={['photo1', 'photo2', 'photo3', 'photo4', 'photo5']}
        />
        <PhotoStrip
          title="Bathroom"
          photos={['photo1', 'photo2', 'photo3']}
        />
        <PhotoStrip
          title="Outdoor Space"
          photos={['photo1', 'photo2', 'photo3', 'photo4']}
        />
      </div>
    );
  }
}

export default Body;
