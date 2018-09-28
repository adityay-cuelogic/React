import React from 'react';
import classes from './BuildControl.css'
const buildControl = (props) => {
        return(
            <div>
                <div className={classes.Label}>{props.label}</div>
                <button className={classes.Less} onClick={props.deleteClick} disabled={props.disabled}>Less</button>
                <button className={classes.More} onClick={props.addclick}>More</button>
                </div>
        )
}

export default buildControl;