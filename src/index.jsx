import React from 'react';
import ReactDOM from 'react-dom';

// Services
import Home from './services/Home/Home.jsx';
import Photos from './services/Photos/Photos.jsx';

// GET PHOTOS HERE, SO YOU CAN PASS TO MAIN PAGE, PHOTO GALLERY PAGE, AND PHOTO DETAILS PAGE

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isHome: false,
      photos: {
        livingRoom: [],
        kitchen: [],
        bedroom: [],
        bathroom: [],
        interior: [],
        other: [],
        backyard: [],
        pets: [],
      },
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/retrieve', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const livingRoom = [];
        const kitchen = [];
        const bedroom = [];
        const bathroom = [];
        const interior = [];
        const other = [];
        const backyard = [];
        const pets = [];

        for (let i = 0; i < data.length; i++) {
          switch (data[i].tag) {
            case 'Living Room':
              livingRoom.push(data[i]);
              continue;
            case 'Kitchen':
              kitchen.push(data[i]);
              continue;
            case 'Bedroom':
              bedroom.push(data[i]);
              continue;
            case 'Bathroom':
              bathroom.push(data[i]);
              continue;
            case 'Interior':
              interior.push(data[i]);
              continue;
            case 'Other':
              other.push(data[i]);
              continue;
            case 'Backyard':
              backyard.push(data[i]);
              continue;
            case 'Pets':
              pets.push(data[i]);
              continue;
          }
        }

        this.setState({
          photos: {
            livingRoom,
            kitchen,
            bedroom,
            bathroom,
            interior,
            other,
            backyard,
            pets,
          },
        });
      })
      .catch((error) => {
        console.log(`[Error]: ${error}`);
      });
  }

  onClick() {
    this.setState({
      isHome: !this.state.isHome,
    });
  }

  render() {
    if (this.state.isHome) {
      return <Home callback={this.onClick} photos={this.state.photos} />;
    } else {
      return <Photos callback={this.onClick} photos={this.state.photos} />;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
