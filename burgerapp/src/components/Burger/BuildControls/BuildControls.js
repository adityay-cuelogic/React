import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const buildControls = (props) => {
    const controls =[
        {label:'Salad',type:'salad'},
        {label:'Bacon',type:'bacon'},
        {label:'Cheese',type:'cheese'},
        {label:'Meat',type:'meat'}
    ];
    return(
        <div className={classes.BuildControls}>
            <p>Current Price:{props.currentPrice}</p>
            {controls.map((element)=> {
                return (
                    <BuildControl 
                    deleteClick={props.deleteClick.bind(null,element.type)} 
                    addclick ={props.addclick.bind(null,element.type)}
                    key={element.label} 
                    label={element.label}
                    disabled={props.disabled[element.type]}/>
                );
            })}
            <button onClick={props.ordered} className={classes.OrderButton} disabled={props.currentPrice===props.basePrice?true:false}>Order Now</button>
            </div>
    )
}

export default buildControls;