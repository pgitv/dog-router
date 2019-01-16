import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import whiskey from './whiskey.jpg';
import hazel from './hazel.jpg';
import tubby from './tubby.jpg';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import DogList from './DogList.js';
import DogDetails from './DogDetails.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <NavLink to="/dogs">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dogs/Whiskey">Whiskey</NavLink>
          </li>
          <li>
            <NavLink to="/dogs/Hazel">Hazel</NavLink>
          </li>
          <li>
            <NavLink to="/dogs/Tubby">Tubby</NavLink>
          </li>
        </ul>
        <Switch>
          <Route
            path="/dogs/:name"
            render={routeProps => (
              <DogDetails {...routeProps} dogData={this.props.dogs} />
            )}
          />

          <Route
            exact
            path="/dogs"
            render={() => <DogList dogData={this.props.dogs} />}
          />
          <Redirect to="/dogs" />
        </Switch>
      </div>
    );
  }
}

App.defaultProps = {
  dogs: [
    {
      name: 'Whiskey',
      age: 5,
      src: whiskey,
      facts: [
        'Whiskey loves eating popcorn.',
        'Whiskey is a terrible guard dog.',
        'Whiskey wants to cuddle with you!'
      ]
    },
    {
      name: 'Hazel',
      age: 0,
      src: hazel,
      facts: [
        'Hazel has soooo much energy!',
        'Hazel is highly intelligent.',
        'Hazel loves people more than dogs.'
      ]
    },
    {
      name: 'Tubby',
      age: 4,
      src: tubby,
      facts: [
        'Tubby is really stupid.',
        'Tubby does not like walks.',
        'Angelina hates Tubby.'
      ]
    }
  ]
};

export default App;
