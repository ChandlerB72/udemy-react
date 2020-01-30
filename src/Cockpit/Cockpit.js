import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
    let btnClass = '';

    if (props.showPersons){
        btnClass = classes.red;
    }

    const assignedClasses = [];
    if(props.persons.length <= 2){
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1){
        assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>React Playground</h1>
            <p className={assignedClasses.join(' ')}> Neato Bandito</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit