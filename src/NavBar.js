import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    let dogs = this.props.dogList.map(dog => (
      <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
    ));
    return (
      <nav>
        <NavLink to="/dogs">Home</NavLink>
        {dogs}
      </nav>
    );
  }
}

export default NavBar;
