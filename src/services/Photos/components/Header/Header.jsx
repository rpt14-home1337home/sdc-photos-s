import React from 'react';
import './Header.css';

// components
import Arrow from './Sub-Components/Arrow.jsx';
import Button from './Sub-Components/Button.jsx';

const Header = (props) => {
  return (
    <div className="photos-header">
      <Arrow callback={props.callback} />
      <Button />
    </div>
  )
}

export default Header;