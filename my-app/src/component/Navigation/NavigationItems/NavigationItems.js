import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'
const navigateItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active> Burger Builder </NavigationItem>
        <NavigationItem link="/" active>  CheckOut</NavigationItem>

    </ul>
);
export default navigateItems;