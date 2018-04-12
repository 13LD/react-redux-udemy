import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {

  state = {
    persons: [
      {name: "Dima", age: 21},
      {name: "Sasha", age: 21},
      {name: "Max", age: 20}
    ]
  }

  switchNameHandler = () => {
    // console.log("Was clicked!")
    // DON'T DO THIS:  this.state.persons[0].name = 'Dmytro'
    this.setState({
      persons: [
        {name: "Dmytro", age: 21},
        {name: "Sasha", age: 21},
        {name: "Max", age: 20}
      ]
    })
  }
  render() {

    return (
      <div className="App">
        <h1>Hi, i'm react</h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My Hobbies: reading, travelling</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
