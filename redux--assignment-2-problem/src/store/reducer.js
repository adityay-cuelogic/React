import * as actionTypes from './actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState,action) => {
    if( action.type === actionTypes.ADD) {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }

        return {
            persons:  state.persons.concat(newPerson)
        }
    }

    if( action.type === actionTypes.DELETE) {
        return {
            persons:  state.persons.filter(person => person.id !== action.value)
        }
    }
    return state;
}

export default reducer;