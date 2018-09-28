import React,{ Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render() {
        const ingredients = Object.keys(this.props.ingredients)
                        .map((igKey) => {
                            return (
                                <li key={igKey}>{igKey}:{this.props.ingredients[igKey]}</li>
                            );
                        });
        return (
            <div>
                <h2>Order</h2>
                <p>Your Ingredients Are:</p>
                <ul>
                    {ingredients}
                </ul>
                <p><strong>The total Price is:{this.props.totalPrice}</strong></p>
                <p>Continue to checkout?</p>
                <Button clicked={this.props.continueClicked} buttontype="Success">Yes</Button>
                <Button clicked={this.props.cancelClicked} buttontype="Danger">No</Button>
                </div>
        )
    }
}

export default OrderSummary;