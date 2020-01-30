import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personState, setPersonsState] = useState({
    persons: [
      {name: 'Wayne', age: '28'},
      {name: 'Dan', age: '29'},
      {name: 'Daryl', age: '26'}
    ], sampleState: 'Sample State'
  })

  console.log(personState)

  constuseState('sample state')

  const switchNameHandler = () => {
    // alert("Button was clicked")
    setPersonsState({
      persons: [
        {name: 'Bonnie', age: '21'},
        {name: 'Stewart', age: '26'},
        {name: 'Roald', age: '25'}
      ]
    })
  }

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>Does this work?</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>Squirrely</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );

}

export default App;
