/**
 * Created by Jinadi on 5/22/2018.
 */
import React from 'react';
import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    console.log(props);
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igkey => {
            return [...Array(props.ingredients[igkey])].map((_, i) => {
                return <BurgerIngredient key={igkey + i} type={igkey} />
            });
        }).reduce((ar, el) => {
            return ar.concat(el);
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Add Ingredients</p>
    }
    return (
        <div className={classes.Burger} >
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};
export default burger;