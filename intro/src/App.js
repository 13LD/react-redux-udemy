import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {

  render() {

    return (
      <div className="App">
        <h1>Hi, i'm react</h1>
        <p>This is working</p>
        <Person/>
      </div>
    );
  }
}

export default App;
