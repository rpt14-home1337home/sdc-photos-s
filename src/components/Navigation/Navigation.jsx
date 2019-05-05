import React from 'react';
import './Navigation.css';

const logo = "m 499.3 736.7 c -51 -64 -81 -120.1 -91 -168.1 c -10 -39 -6 -70 11 -93 c 18 -27 45 -40 80 -40 s 62 13 80 40 c 17 23 21 54 11 93 c -11 49 -41 105 -91 168.1 Z m 362.2 43 c -7 47 -39 86 -83 105 c -85 37 -169.1 -22 -241.1 -102 c 119.1 -149.1 141.1 -265.1 90 -340.2 c -30 -43 -73 -64 -128.1 -64 c -111 0 -172.1 94 -148.1 203.1 c 14 59 51 126.1 110 201.1 c -37 41 -72 70 -103 88 c -24 13 -47 21 -69 23 c -101 15 -180.1 -83 -144.1 -184.1 c 5 -13 15 -37 32 -74 l 1 -2 c 55 -120.1 122.1 -256.1 199.1 -407.2 l 2 -5 l 22 -42 c 17 -31 24 -45 51 -62 c 13 -8 29 -12 47 -12 c 36 0 64 21 76 38 c 6 9 13 21 22 36 l 21 41 l 3 6 c 77 151.1 144.1 287.1 199.1 407.2 l 1 1 l 20 46 l 12 29 c 9.2 23.1 11.2 46.1 8.2 70.1 Z m 46 -90.1 c -7 -22 -19 -48 -34 -79 v -1 c -71 -151.1 -137.1 -287.1 -200.1 -409.2 l -4 -6 c -45 -92 -77 -147.1 -170.1 -147.1 c -92 0 -131.1 64 -171.1 147.1 l -3 6 c -63 122.1 -129.1 258.1 -200.1 409.2 v 2 l -21 46 c -8 19 -12 29 -13 32 c -51 140.1 54 263.1 181.1 263.1 c 1 0 5 0 10 -1 h 14 c 66 -8 134.1 -50 203.1 -125.1 c 69 75 137.1 117.1 203.1 125.1 h 14 c 5 1 9 1 10 1 c 127.1 0.1 232.1 -123 181.1 -263.1 Z"

const arrow = "m 16.29 4.3 a 1 1 0 1 1 1.41 1.42 l -8 8 a 1 1 0 0 1 -1.41 0 l -8 -8 a 1 1 0 1 1 1.41 -1.42 l 7.29 7.29 Z"

const magnifyingGlass = "m 2.5 7 c 0 -2.5 2 -4.5 4.5 -4.5 s 4.5 2 4.5 4.5 s -2 4.5 -4.5 4.5 s -4.5 -2 -4.5 -4.5 m 13.1 6.9 l -2.8 -2.9 c 0.7 -1.1 1.2 -2.5 1.2 -4 c 0 -3.9 -3.1 -7 -7 -7 s -7 3.1 -7 7 s 3.1 7 7 7 c 1.5 0 2.9 -0.5 4 -1.2 l 2.9 2.8 c 0.2 0.3 0.5 0.4 0.9 0.4 c 0.3 0 0.6 -0.1 0.8 -0.4 c 0.5 -0.5 0.5 -1.2 0 -1.7"

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      mouseEnter: false,
    }
  }

  render() {
    return (
      <div id="header">
        <div className="left-box">
          {/* Logo */}
          <div className="logo-box">
            <svg viewBox="0 0 1000 1000" role="presentation" className="logo">
              <path d={logo}></path>
            </svg>
          </div>

          {/* Navigation Arrow */}
          <div className="arrow-box">
            <svg viewBox="0 0 18 18" role="presentation" className="arrow">
              <path d={arrow}></path>
            </svg>
          </div>
        </div>

        <div className="outer-box">
          <div className="remaining-box">
            {/* Magnifying Glass */}
            <svg viewBox="0 0 16 16" role="presentation" className="magnifying-glass">
                  <path d={magnifyingGlass}></path>
            </svg>

            {/* Search Bar */}
            <input className="search-bar" type="text" placeholder="Search" />
          </div>
        </div>


        {/* Menu */}

        {/* <div className="menu-box">
          <div className="navigation">Log in</div>
          <div className="navigation">Sign up</div>
          <div className="navigation">Help</div>
          <div className="navigation">Become a host</div>
        </div> */}



        <div className="menu-box">
          {['Log in', 'Sign up', 'Help', 'Become a host'].map((element, index) => {
            return <SingleMenuItem element={element} key={index}/>
          })}
        </div>

      </div>
    );
  }
}

class SingleMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseEnter: false,
    }
    this.onMouseEnter = this.onMouseEnter.bind(this);
  }

  onMouseEnter() {
    this.setState({
      mouseEnter: !this.state.mouseEnter,
    })
  }

  render() {
    const underline = { borderBottom: this.state.mouseEnter ? '1px solid #767676' : null };
    return (
      <div className="navigation" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseEnter} style={underline}>
        { this.props.element }
      </div>
    )
  }
}


export default Navigation;
