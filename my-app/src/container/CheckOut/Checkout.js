import React, { Component } from 'react';
import CheckoutSummery from '../../component/Order/Checkout/CheckoutSummery';
class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1

        }
    }
    onCheckoutCancel = () => {
        this.props.history.goBack();
    }
    onCheckoutContinued = () => {
        this.props.history.push('/checkout/contact-data');
    }
    componentDidMount=()=>{
        const query=new URLSearchParams(this.props.location.search);
        const ingredients={};
        for(let param of query.entries()){
            ingredients[param[0]]=param[1];
           
        }
        this.setState({ingredients:ingredients});
    }


    render() {
        return (
            <div>
                <CheckoutSummery
                    ingredients={this.state.ingredients}
                    CheckoutContinued={this.onCheckoutContinued}
                    CheckoutCancel={this.onCheckoutCancel} />
            </div>
        );
    }
}
export default Checkout;