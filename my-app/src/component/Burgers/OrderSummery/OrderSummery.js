import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'
const orderSummery = (props) => {
    const ingredientSummery = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{props.ingredients[igKey]}
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
            <p> <strong>Total Price :{props.price}</strong></p>
            <p>Continue to checkout</p>
            <Button btnType="Success" clicked={props.purchaseContinue}>continue</Button>
            <Button btnType="Danger" clicked={props.purchaseCanceld}> cancel</Button>
        </Aux>
    )
}

export default orderSummery;