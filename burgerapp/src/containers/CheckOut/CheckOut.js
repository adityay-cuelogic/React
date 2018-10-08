import React,{ Component } from 'react';
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';

class CheckOut extends Component {

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
                ingredients={this.props.ingredients}
                continue={this.checkoutContinueHandler}
                cancel={this.checkoutCancelHandler}
                />
                <Route 
                    path="/checkOut/contactData"
                    component = {ContactData}
                />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ingredients :   state.ingredients,
        price       :   state.totalPrice   
    }
}
export default connect(mapStateToProps)(CheckOut);