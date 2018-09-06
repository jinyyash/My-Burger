/**
 * Created by Jinadi on 5/21/2018.
 */
import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../component/Burgers/Burger';
import BuildControls from '../../component/Burgers/BuildControls/BuildControls'
import Model from '../../component/UI/Modal/Modal'
import OrderSummery from '../../component/Burgers/OrderSummery/OrderSummery.js';

const INGREDIENT_PRICE = {
    salad: 5,
    bacon: 4,
    cheese: 4,
    meat: 5
};
class BurgerBuilder extends Component {
    /* constructor(props){
         super(props);
         this.state={...}
     }*/

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0

        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };
    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
    }
    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateingredients = {
            ...this.state.ingredients
        };
        updateingredients[type] = updatedCount;
        const priceAdd = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdd;
        this.setState({ totalPrice: newPrice, ingredients: updateingredients });
        this.updatePurchaseState(updateingredients);

    }
    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updateingredients = {
                ...this.state.ingredients
            };
            updateingredients[type] = updatedCount;
            const priceAdd = INGREDIENT_PRICE[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceAdd;
            this.setState({ totalPrice: newPrice, ingredients: updateingredients });
            this.updatePurchaseState(updateingredients);

        }
    }
    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }
    render() {
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }
        return (

            <Aux>
                <Model show={this.state.purchasing}><OrderSummery ingredients={this.state.ingredients} /></Model>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientsAdded={this.addIngredientsHandler}
                    ingredientsRemoved={this.removeIngredientsHandler}
                    disabled={disableInfo}
                    purchasable={this.state.purchasable}

                    price={this.state.totalPrice}
                    orderd={this.purchaseHandler} />
            </Aux>
        );
    }
}
export default BurgerBuilder;