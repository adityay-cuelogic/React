import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  state = {
    showSidebar:true
  }

  render() {
    
    return (
      <div className="App">
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
      </div>
    );
  }
}

export default App;
