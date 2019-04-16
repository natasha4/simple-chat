import React, { Component } from "react";
import Messages from "./Messages.js";
const Api = require('./Api');

class Talk extends Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.pollServer = this.pollServer.bind(this);
        this.updateMessageList = this.updateMessageList.bind(this);
        this.state = {messagesList : []}
        this.pollServer();
    }

    sendMessage(e) {
        const onUpdateCallback = this.updateMessageList;
        var newMessage = document.getElementById('textarea').value;

        Api.postMessage(this.props.userName, newMessage, (body) => {
            onUpdateCallback(body);
            document.getElementById('textarea').value = "";
        });
    }

    updateMessageList(list) {
        this.setState({messagesList: list});
    }

    pollServer() {
        Api.getMessageList(this.updateMessageList);
        setTimeout(this.pollServer, 1000); // request again in 1 secs
    }

    render() {
        return (
            <section className="section">
                <div className="container is-dark">
                    <div className="field is-horizontal">
                        <div id="title">I am {this.props.userName}</div>
                    </div>
                    <Messages list={this.state.messagesList} userName={this.props.userName}/>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <textarea className="textarea" placeholder="Enter your message" id="textarea"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label">
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <button className="button is-info" id="sendButton" onClick={this.sendMessage}>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Talk;