import React from 'react';
import './BodyCollapse.css';

// components
import PhotoStrip from './Sub-Components/PhotoStrip.jsx';

const BodyCollapse = (props) => {

  return (
    <div className="body-container">
      <div className="body-title">All rooms</div>
      <PhotoStrip
        title="Living Room"
        photos={props.photos.livingRoom}
      />
      <PhotoStrip
        title="Kitchen"
        photos={props.photos.kitchen}
      />
      <PhotoStrip
        title="Bedroom"
        photos={props.photos.bedroom}
      />
      <PhotoStrip
        title="Bathroom"
        photos={props.photos.bathroom}
      />
      <PhotoStrip
        title="Interior"
        photos={props.photos.interior}
      />
      <PhotoStrip
        title="Other"
        photos={props.photos.other}
      />
      <PhotoStrip
        title="Backyard"
        photos={props.photos.backyard}
      />
      <PhotoStrip
        title="Pets"
        photos={props.photos.pets}
      />
    </div>
  );
}

export default BodyCollapse;
