import React from 'react';

class PhotoStrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <div className="photo-container">
        <div className="photo-strip">
          {this.props.photos.map((element, index) => {
            return <div className="single-strip-photo" key={index}/>;
          })}
        </div>
        <div className="photo-strip-title">{this.props.title}</div>
      </div>
    );
  }
}

export default PhotoStrip;
