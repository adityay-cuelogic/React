import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    totalPrice:10,
    hideModal:false,
}

const INGREDIENT_PRICES = {
    salad:1,
    cheese:2,
    bacon:3,
    meat:4
}

const reducer = (state = initialState, action ) => {

    if(action.type === actionTypes.ADD_INGREDIENTS) {
        const oldCount = state.ingredients[action.ingredientsType];
        const updatedCount = oldCount + 1;
        let updatedIngredients = { ...state.ingredients };
        updatedIngredients[action.ingredientsType]= updatedCount;
        let updatedPrice = INGREDIENT_PRICES[action.ingredientsType]+state.totalPrice;
        return {
            ingredients :   updatedIngredients,
            totalPrice  :   updatedPrice,
            // hideModal   :   false,
        }
    }

    if(action.type === actionTypes.DELETE_INGREDIENTS) {
        let updatedCount = state.ingredients[action.ingredientsType]-1;
        let ingredients = {...state.ingredients};
        ingredients[action.ingredientsType]= updatedCount;
        let updatedPrice = state.totalPrice-INGREDIENT_PRICES[action.ingredientsType];
        return {
            ingredients :   ingredients,
            totalPrice  :   updatedPrice,
            // hideModal   :   false,
        }
    }

    if(action.type === actionTypes.SHOW_MODAL) {
        return {
            ...state,
            ...state.hideModal,
            hideModal:true
        }
    }

    if(action.type === actionTypes.CLOSE_MODAL) {
        return {
            ...state,
            ...state.hideModal,
            hideModal:false
        }
    }

    return state;
}

export default reducer;