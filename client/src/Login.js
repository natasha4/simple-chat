import React, { Component} from "react";

const Api = require('./Api');

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const userName = document.getElementById('userName').value;
    const handler = this.props.onUserNameChange;
    Api.postUser(userName, (body) => {handler(userName)});
  }

  render() {
    return (
      <section className="section">
        <div className="container is-dark">

          <div className="field">
            <div className="field-label">
              Enter you name
          </div>
            <div className="field-body">
              <div className="control">
                <input className="input is-primary" type="text" placeholder="Your name" id="userName" />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-info" id="sendButton" onClick={this.handleChange}>
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;