import React,{ Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'; 
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorhandler from '../../hoc/withErrorhandler/withErrorhandler';
import {connect} from 'react-redux';
import axios from '../../axios-order';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
    
    state = {
        basePrice:10,
        hideModal:false,
        loadSpinner:false,
        loadBurgerSpinner:false
    }

    // componentDidMount () {
    //     this.setState({loadBurgerSpinner:false});
    //     // axios.get("https://react-burger-app-d5c3c.firebaseio.com/ingredients.json")
    //     // .then(response => {
    //     //     this.setState({ingredients:response.data,loadBurgerSpinner:false});
    //     // });
    // }

    
showModalHandler = () => {
        this.setState({hideModal:true})
    }
    
    closeModalHandler = () => {
        this.setState({hideModal:false})
    }

    continueHandler = () => {
        this.props.history.push("/checkOut");
    }

    render() {
        let disabled = [];
        let orderSummary = '';
        let burger =(<div  style={{margin: "200px 600px 0px"}}><Spinner/></div>);    
        if(this.state.loadSpinner) {
            orderSummary=(<Spinner/>);
        }
        if(this.props.ingredientsList && !this.state.loadBurgerSpinner) {
            burger = (
                <div>
                    <Burger ingredients={this.props.ingredientsList}/>
                        <BuildControls 
                            ordered={this.showModalHandler} 
                            disabled={disabled}
                            basePrice={this.state.basePrice} 
                            currentPrice={this.props.totalPrice} 
                            addclick={this.props.addIngredients}  
                            deleteClick={this.props.deleteIngredients} 
                        />
                </div>    
            );
            orderSummary = (<OrderSummary 
                totalPrice={this.props.totalPrice} 
                continueClicked={this.continueHandler} 
                cancelClicked={this.props.closeModal} 
                ingredients={this.props.ingredientsList}
            />) 
        }
        for(let key in this.props.ingredientsList) {
            disabled[key] = this.props.ingredientsList[key]<=0;
        }

        return(
            <Aux>
                <Modal hideModal={this.state.hideModal} closeModal={this.showModalHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}
const mapStateToProps = state => {
    return {
        ingredientsList : state.ingredients,
        totalPrice  : state.totalPrice,
        // hideModal   : state.hideModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredients : (ingredientsType) => dispatch({type:actionTypes.ADD_INGREDIENTS,ingredientsType:ingredientsType}),
        deleteIngredients   : (ingredientsType) => dispatch({type:actionTypes.DELETE_INGREDIENTS,ingredientsType:ingredientsType}),
        // showModal : () => dispatch({type:actionTypes.SHOW_MODAL}),
        // closeModal : () => dispatch({type:actionTypes.CLOSE_MODAL}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorhandler(BurgerBuilder,axios));