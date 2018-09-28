import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    users: [
      {name:"Aditya"},
      {name:"Yadav"}
    ]
  }
  changeUserName = (event) => {
    this.setState(
      {
        users: [
          {name:event.target.value},
          {name:event.target.value}
        ]
      }
    );
  }
  render() {
    return (
      <div className="App">
        <UserOutput name={this.state.users[0].name} />
        <UserOutput name ={this.state.users[1].name} />
        <UserInput changeName={this.changeUserName}/>
      </div>
    );
  }
}

export default App;
