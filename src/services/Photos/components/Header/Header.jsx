import React from 'react';
import './Header.css';

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


    </div>
  )
}

export default Header;