import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';
const sideDrawer = (props) => {
    let style = [classes.SideDrawer];
    style.push(props.show === true?classes.Open:classes.Close);
    return (
        <Aux>
        <BackDrop hideModal={props.show} closeModal={props.closed}/>
            <div className={ style.join(' ') } >
                <div className={classes.Logo}>
                    <Logo/>
                </div>    
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>    
    )
    
}

export default sideDrawer;