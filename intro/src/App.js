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

  switchNameHandler = (newName) => {
    // console.log("Was clicked!")
    // DON'T DO THIS:  this.state.persons[0].name = 'Dmytro'
    this.setState({
      persons: [
        {name: newName, age: 21},
        {name: "Sasha", age: 21},
        {name: "Max", age: 20}
      ]
    })
  }
  nameChangedHandler = (newName) => {
    // console.log("Was clicked!")
    // DON'T DO THIS:  this.state.persons[0].name = 'Dmytro'
    this.setState({
      persons: [
        {name: newName, age: 21},
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
        <button onClick={() => this.switchNameHandler("Dmytro")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}>

        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Dima")}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler}
        />
      </div>
    );
  }
}

export default App;
