import React from 'react';
import Aux from '../../../hoc/Aux'; 
const orderSummery = (props) => {
    const ingredientSummery = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
                </li>
            )
        });
    return (
        <Aux>
            <h3>Order Summery</h3> 
            <p>Burger with</p>
            <ul>
                {ingredientSummery}
            </ul>
        </Aux>
    )
}

export default orderSummery;