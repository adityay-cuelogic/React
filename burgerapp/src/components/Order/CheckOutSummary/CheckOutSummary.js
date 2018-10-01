import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckOutSummary.css'

const checkOutSummary = (props) => {
    return (
        <div className={classes.CheckOutSummary}>
            <h1>We hope it tastes good!!!</h1>
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>                
            </div>
            <Button 
                buttontype="Danger"
                clicked={props.cancel}
                >Cancel</Button>
            <Button 
                buttontype="Success"
                clicked={props.continue}
                >Continue</Button>
        </div>
    )
}

export default checkOutSummary;