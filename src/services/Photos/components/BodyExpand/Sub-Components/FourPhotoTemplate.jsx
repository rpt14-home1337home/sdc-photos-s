import React from 'react';

const FourPhotoTemplate = (props) => {
  return (
    <div className="four-expand-container">
      <div className="expand-room-name">Living room</div>
      <div className="expand-room-details">
        Smart TV, Cable TV, Mountain View, Balcony
      </div>
      <div className="four-wrapper">
        <div className="grid-box fourframe-expand-box-one" />
        <div className="grid-box fourframe-expand-box-two" />
        <div className="grid-box fourframe-expand-box-three" />
        <div className="grid-box fourframe-expand-box-four" />
        <div className="grid-box fourframe-expand-box-review" />
      </div>
    </div>
  );
};

export default FourPhotoTemplate;
