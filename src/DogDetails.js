import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DogDetails extends Component {
  constructor(props) {
    super(props);
    this.getOneDogInfo = this.getOneDogInfo.bind(this);
  }
  getOneDogInfo() {
    let dogName = this.props.match.params.name;
    let dogDetails = this.props.dogData.filter(
      details => details.name === dogName
    );

    return (
      <div>
        <p>Name: {dogName}</p>
        <img src={dogDetails[0].src} />
        Age: {dogDetails[0].age}
        Facts:{' '}
        <ul>
          {dogDetails[0].facts.map(fact => (
            <li>{fact}</li>
          ))}
        </ul>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.getOneDogInfo()}
        <Link to="/">Go Back</Link>
      </div>
    );
  }
}

export default DogDetails;
