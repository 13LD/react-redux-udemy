import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="person">
        <h1>{this.props.name}</h1>
        <p>Your years: {this.props.year}</p>
      </div>
    );
  }
}

export default App;
