import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DogList extends Component {
  render() {
    const dogs = this.props.dogData.map(dog => (
      <div>
        <img src={dog.src} alt="" />
        <p>{dog.name}</p>

        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
      </div>
    ));
    return (
      <div>
        {/* <p>Dog name {this.props.name} </p>
        <p>Facts {this.props.facts}</p> */}
        {dogs}
      </div>
    );
  }
}
export default DogList;
