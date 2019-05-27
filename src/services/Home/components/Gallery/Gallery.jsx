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

    if (this.props.photos.livingRoom.length) {
      return (
        <div className="gallery-box">
          <div className="gallery-top-border-line" />
          <div className="gallery-title">Tour this home</div>
          <div className="gallery-photos">
            <Photo
              link={this.props.photos.livingRoom[0].link}
              title="Living room"
              callback={this.props.callback}
            />
            <Photo
              link={this.props.photos.kitchen[0].link}
              title="Full kitchen"
              callback={this.props.callback}
            />
            <Photo
              link={this.props.photos.bedroom[0].link}
              title="Bedroom"
              callback={this.props.callback}
            />
            <Photo
              link={this.props.photos.bathroom[0].link}
              title="Full bathroom"
              callback={this.props.callback}
            />
            <Photo
              link={this.props.photos.interior[0].link}
              title="Interior"
              callback={this.props.callback}
            />
            <Photo
              link={this.props.photos.other[0].link}
              title="Other"
              callback={this.props.callback}
            />
            <Photo
              link={this.props.photos.backyard[0].link}
              title="Backyard"
              callback={this.props.callback}
            />
            <Photo
              link={this.props.photos.pets[0].link}
              title="Pets"
              callback={this.props.callback}
            />
          </div>
          <div className="explore-more-title">Explore all 26 photos</div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Gallery;
