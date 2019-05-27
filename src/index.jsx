import React from 'react';
import ReactDOM from 'react-dom';

// Services
import Home from './services/Home/Home.jsx';
import Photos from './services/Photos/Photos.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isHome: true,
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

        this.setState({
          photos: {
            livingRoom: randomize(livingRoom, 5),
            kitchen: randomize(kitchen, 5),
            bedroom: randomize(bedroom, 4),
            bathroom: randomize(bathroom, 3),
            interior: randomize(interior, 4),
            other: randomize(other, 3),
            backyard: randomize(backyard, 3),
            pets: randomize(pets, 3),
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
      return (
        <Photos
          isCollapsed={false}
          callback={this.onClick}
          photos={this.state.photos}
        />
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
