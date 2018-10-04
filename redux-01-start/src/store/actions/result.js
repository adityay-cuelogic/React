import * as actionTypes from './actionTypes';

export const saveResult = (value) => {
    return {
        type: actionTypes.ADD_RESULT,
        result: value
    };
}

export const addResult = ( res ) => {

    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res));
        },2000);
    }
    
};

export const subResult = ( resElId ) => {
    return {
        type: actionTypes.SUB_RESULT,
        id: resElId
    };
};