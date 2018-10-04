import React, { Component } from 'react';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from "react-redux";
import * as actionTypes from '../store/actions';

class Persons extends Component {
    state = {
        persons: []
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}
const mapSateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        personDeletedHandler:(id) => dispatch({type:actionTypes.DELETE,value:id}),
        personAddedHandler:() => dispatch({type:actionTypes.ADD}),
    }
}

export default connect(mapSateToProps,mapDispatchToProps)(Persons);