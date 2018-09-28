import React from 'react';
import classes from './Burger.css';
import BurgerIngerdient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {
    let ingredientsList = Object.keys(props.ingredients)
                        .map((igkey)=>{
                            return [...Array(props.ingredients[igkey])]
                        .map((_,i) => {
                            return (<BurgerIngerdient
                                type={igkey}
                                key={igkey+i}
                            />)
                        }
                        )    
                        })
                        .reduce((arr,el)=>{
                            return arr.concat(el);
                        },[]);               
    if(ingredientsList.length===0) {
        ingredientsList=<p style={{marginLeft: "100px"}}>Please Start Ingredients</p>;
    }                    
    return (
        <div className={classes.Burger}>
            <BurgerIngerdient type="bread-top"/>
                {ingredientsList}
            <BurgerIngerdient type="bread-bottom"/>
            
            </div>
    );
}

export default burger;