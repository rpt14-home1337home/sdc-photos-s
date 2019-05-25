import React from 'react';
import './BodyExpand.css';

// components
import FourPhotoTemplate from './Sub-Components/FourPhotoTemplate.jsx';
import FivePhotoTemplate from './Sub-Components/FivePhotoTemplate.jsx';
import ThreePhotoTemplate from './Sub-Components/ThreePhotoTemplate';


const BodyExpand = () => {
  return (
    <div>
      <FivePhotoTemplate />
      <FourPhotoTemplate />
      <ThreePhotoTemplate />
    </div>
  );
};

export default BodyExpand;
