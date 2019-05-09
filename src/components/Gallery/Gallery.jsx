import React from 'react';
import './Gallery.css';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    }
  }
  render() {
    return (
      <div className="gallery-box">
        <div className="gallery-top-border-line"></div>
        <div className="gallery-title">Tour this home</div>
        <div className="gallery-photos">
          <div className="single-photo">
            <img src="https://a0.muscache.com/im/pictures/9ffc0181-5464-43b7-8884-23c8639085d9.jpg?aki_policy=x_medium" alt="photo" className="photo"/>
            <div className="photo-title">Living room</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery;