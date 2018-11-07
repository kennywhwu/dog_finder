import React, { Component } from 'react';
import Dog from './Dog';
import Home from './Home';
import { Route, Switch, Redirect } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/dogs"
          render={() => <Home dogList={this.props.dogList} />}
        />
        <Route
          exact
          path="/dogs/:name"
          render={props => <Dog {...props} dogList={this.props.dogList} />}
        />
        <Redirect to="/dogs" />
      </Switch>
    );
  }
}

export default Routes;
