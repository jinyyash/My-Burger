import React from 'react';
import classes from './Modal.css'
const model = (props) => (
    <div className={classes.Modal}> {props.children}</div> //can be anything
);

export default model;