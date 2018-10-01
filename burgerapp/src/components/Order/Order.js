import React from 'react';
import classes from './Order.css'
const order = (props) => {
    let ingredients = [];
    for(let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name:ingredientName,
                amount:props.ingredients[ingredientName]
            }
        );
    }
    const ingredientOutput = ingredients.map(ingredient => (
        <span 
        key={ingredient.name} 
        style={{
            textTransform:  'capitalize',
            display:'inline-block',
            margin:'0 8px',
            padding:'5px'

        }}
        > {ingredient.name} ({ingredient.amount})</span>
    ));

    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price : <strong>{props.price}</strong></p>
        </div>
    )
}

export default order;