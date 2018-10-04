import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
         order : {
            name:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your City'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            country:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email:{
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 15
                },
                valid: false,
                touched: false
            },
            deliveryMethod:{
                elementType: 'select',
                elementConfig: {
                    options:[
                        {value: 'fastest',displayValue: 'Fastest'},
                        {value: 'cheapest',displayValue: 'Cheapest'}
                    ],
                },
                value: 'fastest',
                valid: true,
                touched: false
            }
        },
        formValid:false,
        loadSpinner: false
    }

    orderhandler = (event) => {
        // event.preventDefault();
        this.setState({loadSpinner:true});
        const formData = {};
        for (let formElementIdentifier in this.state.order) {
            formData[formElementIdentifier] = this.state.order[formElementIdentifier].value;
        }
        const order = {
            ingredients:this.props.ingredients,
            price:this.props.price,
            order:formData
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

    checkValidityHandler = (validation,value) => {
        let isValid = true;
        if(typeof validation !== "undefined") {
            if( validation.required ) {
                isValid = value.trim() !== '' && isValid;
            }
    
            if (validation.minLength) {
                isValid = value.length >= validation.minLength && isValid;
            }
    
            if (validation.maxLength) {
                isValid = value.length <= validation.maxLength && isValid;
            }   
        }
        

        return isValid;
    }

    inputchangeHandler = (event,id) => {
        let formValid = true;
        const updateForm = {...this.state.order};
        const updateFormElement = {...this.state.order[id]};
        updateFormElement.value = event.target.value;
        updateFormElement.valid = this.checkValidityHandler(updateFormElement.validation,updateFormElement.value)
        updateFormElement.touched = true;
        updateForm[id] = updateFormElement;
        for(let key in updateForm) {
            formValid = updateForm[key].valid && formValid;
        }
        this.setState({order:updateForm,formValid:formValid});
    }

    render () {
        let formElementArray = [];
        for(let key in this.state.order) {
            formElementArray.push({
                id:key,
                config:this.state.order[key]
            });
        }
        let form = (
            <form onSubmit={this.orderhandler}>
                {
                    formElementArray.map((formElement)=>(
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputchangeHandler(event,formElement.id)}
                        />
                    ))
                }
                <Button buttontype="Success" disabled={!this.state.formValid}>ORDER</Button>
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