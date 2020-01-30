import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons.js'
import Cockpit from '../Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
    {id: '1', name: 'Wayne', age: '28'},
    {id: '2', name: 'Daniel', age: '29'},
    {id: '3', name: 'Daryl', age: '26'}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // Copy persons object
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]

    // Remove person at index in copy
    persons.splice(personIndex, 1);

    // Set state to new copy of persons
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    // Find person who matches ID
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    // Copy person instead of getting reference
    // const person = Object.assign({}, this.state.persons[personIndex])
    const person = {...this.state.persons[personIndex]}

    // Set person name to value in textbox
    person.name = event.target.value;

    // Copy persons object
    const persons = [...this.state.persons];

    // Set person at index to copied person
    persons[personIndex] = person;

    // Set state to new copy of persons
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    let persons = null;

    if(this.state.showPersons){
      persons = 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}></Persons>
    }
  
    return (
        <div className={classes.App}>
          <Cockpit 
            title={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}/>
          {persons}
        </div>
    );
  }
}

export default App;