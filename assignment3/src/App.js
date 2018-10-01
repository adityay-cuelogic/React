import React, { Component } from 'react';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import { Route,BrowserRouter,Link,Switch,Redirect } from 'react-router-dom';
import "./App.css";

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <ul className="App">
            <li> <Link to="/users" >Users</Link> </li>
            <li> <Link to="/courses" >Courses</Link> </li>
          </ul>
          <Switch>
          <Route path ="/courses" component={Courses}/>
          <Route path ="/users" exact component={Users}/>
          <Redirect from="/all-courses" to="/courses"/>
          <Route render={()=><h2>Page Not found</h2>}/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
