import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    let dogs = this.props.dogList.map(dog => (
      <div>
        <Link to={`dogs/${dog.name}`}>
          <img src={dog.img} alt="" />
          {dog.name}
        </Link>
      </div>
    ));
    return <div>{dogs}</div>;
  }
}

export default Home;
