import React, { Component } from "react";
import './styles/css/bulma.css'
import Login from "./Login.js";
import Talk from "./Talk.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.state = {userName: ''};
  }

  handleUserNameChange(userName) {
    this.setState({userName});
  }


  render() {
    const appcontent = this.state.userName === '' ? (
      <Login onUserNameChange={this.handleUserNameChange}/>
    ) : (
      <Talk userName={this.state.userName}/>
    )

    return (
      <div className="App">
        {appcontent}
      </div>
    );
  }
}

export default App;