import * as actionTypes from '../actions/actionTypes';
const initialState = {
    result:[]
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.ADD_RESULT) {
        return {
            ...state,
            result:state.result.concat({id:new Date(),value:action.result})
        }
    }

    if (action.type === actionTypes.SUB_RESULT) {
        let updateArray = [...state.result];
        updateArray =updateArray.filter(result => result.id !== action.id)
        return {
            result:updateArray
        }
    }
    return state;
};

export default reducer;