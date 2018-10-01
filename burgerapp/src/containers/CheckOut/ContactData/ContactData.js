import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        ingredients:{},
        price:0,
        loadSpinner: false
    }

    orderhandler = (event) => {
        // event.preventDefault();
        this.setState({loadSpinner:true});
        const order = {
            ingredients:this.props.ingredients,
            price:this.props.price,
            customer : {
                name:"Aditya yadav",
                address: {
                    city: "Pune",
                    country:"India"
                }
            }
        }
        axios.post("/orders.json",order)
        .then(response=>{
            this.setState({loadSpinner:false});
            this.props.history.push("/");
        })
        .catch(error=>{
            this.setState({loadSpinner:false});
        });
    }

    render () {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderhandler}>ORDER</Button>
            </form>
        );
        if(this.state.loadSpinner) {
            form=(<Spinner />);
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;