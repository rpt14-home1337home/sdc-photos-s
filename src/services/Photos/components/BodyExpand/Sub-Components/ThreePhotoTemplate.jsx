import React from 'react';

const ThreePhotoTemplate = (props) => {
  return (
    <div className="three-expand-container">
      <div className="expand-room-name">Living room</div>
      <div className="expand-room-details">
        Smart TV, Cable TV, Mountain View, Balcony
      </div>
      <div className="three-wrapper">
        <div className="grid-box threeframe-expand-box-one" />
        <div className="grid-box threeframe-expand-box-two" />
        <div className="grid-box threeframe-expand-box-three" />
        <div className="grid-box threeframe-expand-box-review" />
      </div>
    </div>
  );
};

export default ThreePhotoTemplate;
