import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/persons/Persons.js'
import Cockpit from '../cockpit/Cockpit';
import withClass from '../hoc/withClass'
import Aux from '../hoc/Auxiliary'

class App extends Component {
  constructor(props){
    super(props)
    console.log('[App.js] constructor')
    this.state = {
      persons: [
      {id: '1', name: 'Wayne', age: '28'},
      {id: '2', name: 'Daniel', age: '29'},
      {id: '3', name: 'Daryl', age: '26'}
      ],
      showPersons: false,
      showCockPit: true
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps')
    return state
  }

  componentWillMount(){
    console.log('[App.js] componentWillMount')
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();  // Copy persons object
    const persons = [...this.state.persons] // Copy persons object
    persons.splice(personIndex, 1); // Remove person at index in copy
    this.setState({persons: persons}); // Set state to new copy of persons
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id // Find person who matches ID
    });
    // const person = Object.assign({}, this.state.persons[personIndex]) // Copy person instead of getting reference
    const person = {...this.state.persons[personIndex]} // Copy person instead of getting reference
    person.name = event.target.value; // Set person name to value in textbox
    const persons = [...this.state.persons]; // Copy persons object
    persons[personIndex] = person; // Set person at index to copied person
    this.setState({persons: persons}) // Set state to new copy of persons
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if(this.state.showPersons){
      persons = 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}></Persons>
    }
  
    return (
        <Aux>
          <button onClick={() => {this.setState({showCockPit: false})}}>Remove Cockpit</button>
          {this.state.showCockPit ? 
            <Cockpit 
              title={this.props.title}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonHandler}/>: null}
          {persons}
        </Aux>
    );
  }
}

export default withClass(App, classes.App);