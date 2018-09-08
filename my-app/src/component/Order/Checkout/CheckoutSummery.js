import React from 'react';
import Burger from '../../Burgers/Burger';
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummery.css'
const checkoutSummery = (props) => {
    return (
        <div className={classes.CheckoutSummery}>
            <h1>Hope You enjoy!!</h1>
            <div style={{ width: '300px', height: '300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Success" clicked={props.CheckoutContinued}>continue</Button>
            <Button btnType="Danger" clicked={props.CheckoutCancel}> cancel</Button>
        </div>
    )
}
export default checkoutSummery;