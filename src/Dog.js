import React, { Component } from 'react';
import Home from './Home';
import { Redirect, Link } from 'react-router-dom';

class Dog extends Component {
  render() {
    let dog = this.props.dogList.find(
      e => e.name === this.props.match.params.name
    );
    if (!dog) {
      return <Redirect to="/dogs" />;
    }

    let dogFacts = dog.facts.map(fact => <li>{fact} </li>);

    return (
      <div>
        <img src={dog.img} alt="" />
        <h3>{dog.name}</h3>
        <h5>{dog.age} years old</h5>
        <ul>{dogFacts}</ul>
        <Link to="/dogs" />
      </div>
    );
  }
}

export default Dog;
