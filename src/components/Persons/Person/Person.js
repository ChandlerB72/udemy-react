import React, {Component} from 'react';
import classes from "./Person.css"
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component{
    constructor(props){
        super(props)
        this.elementRef = React.createRef()
    }

    static contextType = AuthContext

    componentDidMount(){
        this.elementRef.current.focus()
        console.log(this.context.authenticated)
    }

    render () {
    console.log('[person.js] rendering...');
        return (
        <Aux>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
            <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text" 
                ref={this.elementRef} 
                onChange={this.props.changed} 
                value={this.props.name}></input>
        </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);