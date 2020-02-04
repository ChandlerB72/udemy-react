import React, {useEffect, useRef, useContext} from 'react'
import classes from './Cockpit.css'
import AuthContext from '../context/auth-context'

const cockpit = (props) => {
    const toggleBtnRef = useRef(null)
    const authContext = useContext(AuthContext)

    console.log

    useEffect(() => {
        // Where to do an HTTP Request
        console.log('[Cockpit.js] useEffect')
        toggleBtnRef.current.click()
        return () => {
            console.log('[Cockpit.js] clean up work')
        }
    }, [])

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
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}> Neato Bandito</p>
            <button 
                ref={toggleBtnRef} 
                className={btnClass} 
                onClick={props.clicked}>
                    Toggle Persons
            </button>
            <button onClick={authContext.login}>Log In</button>
        </div>
    );
}

export default cockpit