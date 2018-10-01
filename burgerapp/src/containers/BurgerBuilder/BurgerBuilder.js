import React,{ Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'; 
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorhandler from '../../hoc/withErrorhandler/withErrorhandler';
import axios from '../../axios-order';

const INGREDIENT_PRICES = {
    salad:1,
    cheese:2,
    bacon:3,
    meat:4
}
class BurgerBuilder extends Component {
    
    state = {
        ingredients: null,
        totalPrice:10,
        basePrice:10,
        hideModal:false,
        loadSpinner:false,
        loadBurgerSpinner:false
    }

    componentDidMount () {
        this.setState({loadBurgerSpinner:true});
        axios.get("https://react-burger-app-d5c3c.firebaseio.com/ingredients.json")
        .then(response => {
            this.setState({ingredients:response.data,loadBurgerSpinner:false});
        });
    }

    addIngredientsHandler = (type) => {
        // let updatedCount = this.state.ingredients[type];        
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type]= updatedCount;
        let updatedPrice = INGREDIENT_PRICES[type]+this.state.totalPrice;
        this.setState({ingredients:updatedIngredients,totalPrice:updatedPrice});
    }
    deleteIngredientsHandler = (type) => {
        let updatedCount = this.state.ingredients[type]-1;
        let ingredients = {...this.state.ingredients};
        ingredients[type]= updatedCount;
        let updatedPrice = this.state.totalPrice-INGREDIENT_PRICES[type];
        this.setState({ingredients:ingredients,totalPrice:updatedPrice});
    }

    showModalHandler = () => {
        this.setState({hideModal:true})
    }
    
    closeModalHandler = () => {
        this.setState({hideModal:false})
    }

    continueHandler = () => {
        const queryParams = [];
        for(let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push("price="+this.state.totalPrice);
        const queryParamString = queryParams.join('&');
        this.props.history.push({
            pathname : "/checkOut",
            search: '?' + queryParamString
        });
    }

    render() {
        let disabled = [];
        let orderSummary = '';
        let burger =(<div  style={{margin: "200px 600px 0px"}}><Spinner/></div>);    
        if(this.state.loadSpinner) {
            orderSummary=(<Spinner/>);
        }
        if(this.state.ingredients && !this.state.loadBurgerSpinner) {
            burger = (
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                        <BuildControls 
                            ordered={this.showModalHandler} 
                            disabled={disabled} 
                            basePrice={this.state.basePrice} 
                            currentPrice={this.state.totalPrice} 
                            addclick={this.addIngredientsHandler}  
                            deleteClick={this.deleteIngredientsHandler} 
                        />
                </div>    
            );
            orderSummary = (<OrderSummary 
                totalPrice={this.state.totalPrice} 
                continueClicked={this.continueHandler} 
                cancelClicked={this.closeModalHandler} 
                ingredients={this.state.ingredients}
            />) 
        }
        for(let key in this.state.ingredients) {
            disabled[key] = this.state.ingredients[key]<=0;
        }

        return(
            <Aux>
                <Modal hideModal={this.state.hideModal} closeModal={this.closeModalHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorhandler(BurgerBuilder,axios);