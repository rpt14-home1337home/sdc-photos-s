import React from 'react';
import './BodyExpand.css';

// components
import FourPhotoTemplate from './Sub-Components/FourPhotoTemplate.jsx';
import FivePhotoTemplate from './Sub-Components/FivePhotoTemplate.jsx';
import ThreePhotoTemplate from './Sub-Components/ThreePhotoTemplate';

const BodyExpand = (props) => {
  return (
    <div>
      <FivePhotoTemplate
        photos={props.photos.livingRoom}
        room="Living room"
        details="[Insert] Details about living room"
      />
      <FivePhotoTemplate
        photos={props.photos.kitchen}
        room="Kitchen"
        details="[Insert] Details about kitchen"
      />
      <FourPhotoTemplate
        photos={props.photos.bedroom}
        room="Bedroom"
        details="[Insert] Details about bedroom"
      />
      <ThreePhotoTemplate
        photos={props.photos.bathroom}
        room="Bathroom"
        details="[Insert] Details about bathroom"
      />
      <FourPhotoTemplate
        photos={props.photos.interior}
        room="Interior"
        details="[Insert] Details about interior"
      />
      <ThreePhotoTemplate
        photos={props.photos.other}
        room="Other spaces"
        details="[Insert] Details about other"
      />
      <ThreePhotoTemplate
        photos={props.photos.backyard}
        room="Backyard"
        details="[Insert] Details about backyard"
      />
      <ThreePhotoTemplate
        photos={props.photos.pets}
        room="Pets"
        details="[Insert] Details about pets"
      />
    </div>
  );
};

export default BodyExpand;
