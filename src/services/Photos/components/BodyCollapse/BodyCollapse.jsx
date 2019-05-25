import React from 'react';
import './BodyCollapse.css';

// components
import PhotoStrip from './Sub-Components/PhotoStrip.jsx';

const BodyCollapse = (props) => {

  function randomize(arr, count) {

    const result = [];
    const copyArr = arr.slice();
    let i = 0;
    let int;

    while (i < count) {
      int = Math.floor(Math.random() * copyArr.length);
      result.push(copyArr[int]);
      copyArr.splice(int, 1);
      i++;
    }
    return result;
  }

  return (
    <div className="body-container">
      <div className="body-title">All rooms</div>
      <PhotoStrip
        title="Living Room"
        photos={randomize(props.photos.livingRoom, 5)}
      />
      {/* <PhotoStrip
        title="Kitchen"
        photos={['photo1', 'photo2', 'photo3', 'photo4', 'photo5']}
      />
      <PhotoStrip
        title="Bedroom"
        photos={['photo1', 'photo2', 'photo3', 'photo4']}
      />
      <PhotoStrip
        title="Bathroom"
        photos={['photo1', 'photo2', 'photo3']}
      />
      <PhotoStrip
        title="Interior"
        photos={['photo1', 'photo2', 'photo3', 'photo4']}
      />
      <PhotoStrip
        title="Other"
        photos={['photo1', 'photo2', 'photo3']}
      />
      <PhotoStrip
        title="Backyard"
        photos={['photo1', 'photo2', 'photo3']}
      />
      <PhotoStrip
        title="Pets"
        photos={['photo1', 'photo2', 'photo3']}
      /> */}
    </div>
  );
}

export default BodyCollapse;
