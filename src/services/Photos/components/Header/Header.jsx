import React from 'react';
import './Header.css';

const tourIcon =
  'M 3 7.5 a 1.5 1.5 0 1 1 -3 0 a 1.5 1.5 0 0 1 3 0 Z m 12.75 0 a 0.75 0.75 0 0 1 -0.75 0.75 H 6 a 0.75 0.75 0 0 1 0 -1.5 h 9 a 0.75 0.75 0 0 1 0.75 0.75 Z m -10.5 -6 A 0.75 0.75 0 0 1 6 0.75 h 9 a 0.75 0.75 0 0 1 0 1.5 H 6 a 0.75 0.75 0 0 1 -0.75 -0.75 Z m 10.5 12 a 0.75 0.75 0 0 1 -0.75 0.75 H 6 a 0.75 0.75 0 0 1 0 -1.5 h 9 a 0.75 0.75 0 0 1 0.75 0.75 Z M 3 1.5 a 1.5 1.5 0 1 1 -2.999 0.001 A 1.5 1.5 0 0 1 3 1.5 Z m 0 12 a 1.5 1.5 0 1 1 -3 0 a 1.5 1.5 0 0 1 3 0 Z';

const Header = (props) => {
  return (
    <div className="photos-header">

      {/* back arrow */}
      <div onClick={props.callback}>
        <svg viewBox="0 0 18 18" className="photos-back-arrow">
          <path d="m 13.7 16.29 a 1 1 0 1 1 -1.42 1.41 l -8 -8 a 1 1 0 0 1 0 -1.41 l 8 -8 a 1 1 0 1 1 1.42 1.41 l -7.29 7.29 Z" />
        </svg>
      </div>

      {/* view room button */}
      <div className="photos-view-button-div">
        <button className="photo-view-button">
          <div className="photo-button-left-div">
            <svg viewBox="0 0 16 16" className="tour-icon">
              <path d={tourIcon} />
            </svg>
          </div>
          <div className="photo-button-right-div">Tour this home</div>
        </button>

      </div>





    </div>
  )
}

export default Header;