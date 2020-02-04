import React, {Component} from 'react'
import Person from './person/Person'

class Persons extends Component {
      shouldComponentUpdate(nextProps, nextState){
            console.log('[Persons.js] shouldComponentUpdate')
            if (nextProps.persons !== this.props.persons ||
                  nextProps.changed !== this.props.changed ||
                    nextProps.clicked !== this.props.clicked){
                  return true
            } else return true
      }

      render () {
      console.log('[persons.js] rendering...')
      return this.props.persons.map((person, index) => {
        return <Person 
                  click={() => this.props.clicked(index)}
                  name={person.name} 
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.props.changed(event, person.id)} />
      });
      }
}
export default Persons;