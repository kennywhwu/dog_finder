import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';

class App extends Component {
  static defaultProps = {
    dogList: [
      {
        img: 'https://usercontent1.hubstatic.com/14009216_f496.jpg',
        name: 'Notorious Big White Fluff',
        age: 2,
        facts: ['Loves to play', 'Sheds like a MOFO']
      },
      {
        img:
          'https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2018/06/labradoodle-header.jpg',
        name: 'Derp',
        age: 1,
        facts: ["Doesn't know what's going on", 'Super cute']
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <NavBar dogList={this.props.dogList} />
        <Routes dogList={this.props.dogList} />
      </div>
    );
  }
}

export default App;
