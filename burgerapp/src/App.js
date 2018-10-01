import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import Orders from './containers/Orders/Orders';
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    showSidebar:true
  }

  render() {
    
    return (
        <div className="App">
          <Layout>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkOut" component={CheckOut} />
            <Route path="/orders" component={Orders} />
          </Layout>
        </div>
    );
  }
}

export default App;
