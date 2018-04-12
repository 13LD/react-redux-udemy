import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {

  render() {

    return (
      <div className="App">
        <h1>Hi, i'm react</h1>
        <p>This is working</p>
        <Person name="Dmytro" age="21"> My Hobbies: reading, travelling</Person>
      </div>
    );
  }
}

export default App;
