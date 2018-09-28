import React from 'react';
import classes from './BackDrop.css';
const backdrop = (props) => props.hideModal ? <div className={classes.BackDrop} onClick={props.closeModal}></div>:null;

export default backdrop;