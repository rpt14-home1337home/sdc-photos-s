import React from 'react';

const FivePhotoTemplate = (props) => {
  return (
    <div className="five-expand-container">
      <div className="expand-room-name">Living room</div>
      <div className="expand-room-details">
        Smart TV, Cable TV, Mountain View, Balcony
      </div>
      <div className="five-wrapper">
        <div className="grid-box fiveframe-expand-box-one" />
        <div className="grid-box fiveframe-expand-box-two" />
        <div className="grid-box fiveframe-expand-box-three" />
        <div className="grid-box fiveframe-expand-box-four" />
        <div className="grid-box fiveframe-expand-box-five" />
        <div className="grid-box fiveframe-expand-box-review" />
      </div>
    </div>
  );
};

export default FivePhotoTemplate;
