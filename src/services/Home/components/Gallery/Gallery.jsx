import React from 'react';
import './Gallery.css';

// components
import Photo from './Sub-Components/Photo.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }
  render() {
    return (
      <div className="gallery-box">
        <div className="gallery-top-border-line" />
        <div className="gallery-title">Tour this home</div>
        <div className="gallery-photos">
          <Photo
            link="https://a0.muscache.com/im/pictures/9ffc0181-5464-43b7-8884-23c8639085d9.jpg?aki_policy=x_medium"
            title="Living room"
            callback={this.props.callback}
          />
          <Photo
            link="https://a0.muscache.com/im/pictures/9c812023-53b7-454e-8f11-95d2186d5862.jpg?aki_policy=x_medium"
            title="Full kitchen"
            callback={this.props.callback}
          />
          <Photo
            link="https://a0.muscache.com/im/pictures/bfabec98-9710-4b36-a579-25016adac550.jpg?aki_policy=x_medium"
            title="Bedroom"
            callback={this.props.callback}
          />
          <Photo
            link="https://a0.muscache.com/im/pictures/9bab70ea-850d-4d4e-a084-eb61ce65a2a8.jpg?aki_policy=x_medium"
            title="Full bathroom"
            callback={this.props.callback}
          />
          <Photo
            link="https://a0.muscache.com/4ea/air/v2/pictures/4dc8ea8c-20b3-45a8-a15c-121b25c62041.jpg?aki_policy=x_medium"
            title="Half bathroom"
            callback={this.props.callback}
          />
          <Photo
            link="https://a0.muscache.com/im/pictures/e5434eaf-8fe2-40fd-90fd-df02e5a5bd27.jpg?aki_policy=x_medium"
            title="Outdoor space"
            callback={this.props.callback}
          />
          <Photo
            link="https://a0.muscache.com/im/pictures/8e7ae102-f0f9-4693-b51c-7359f7061e8b.jpg?aki_policy=x_medium"
            title="Patio"
            callback={this.props.callback}
          />
          <Photo
            link="https://a0.muscache.com/im/pictures/194f75b4-2167-4dad-83d7-2ae24217a353.jpg?aki_policy=x_medium"
            title="Other"
            callback={this.props.callback}
          />
        </div>
        <div className="explore-more-title">Explore all 26 photos</div>
      </div>
    );
  }
}

export default Gallery;
