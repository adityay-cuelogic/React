import React,{ Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';

class Orders extends Component {
    state = {
        orders:[]
    }

    componentDidMount() {
        axios.get("/orders.json")
        .then(resp=> {
            let fetchedOrders = [];
            for(let key in resp.data) {
                // fetchedOrders.push(resp.data[key]);
                fetchedOrders.push({
                    ...resp.data[key],
                    id:key
                });
            }
            this.setState({orders:fetchedOrders});
        })
        .catch();

    }

    render() {
        return(
            <div>
                {this.state.orders.map( order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                )

                )}
            </div>
            )
    }
}
export default Orders;