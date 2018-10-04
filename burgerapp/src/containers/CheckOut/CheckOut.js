import React,{ Component } from 'react';
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class CheckOut extends Component {
    state = {
        ingredients : {},
        price   :0
    }

    componentDidMount() {
        const ingredients = {};
        let price = 0;
        const query = new URLSearchParams(this.props.location.search);
        for(let param of query.entries()) {
            if(param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = param[1];
            }
            
        }
        this.setState({ingredients:ingredients,price:price});
    }

    checkoutContinueHandler = () => {
        this.props.history.replace("/checkOut/contactData");
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return(
            <div>
                <CheckOutSummary 
                ingredients={this.state.ingredients}
                continue={this.checkoutContinueHandler}
                cancel={this.checkoutCancelHandler}
                />
                <Route 
                    path="/checkOut/contactData"
                    render = {(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props}/>)}
                />
            </div>
        );
    }
}

export default CheckOut;