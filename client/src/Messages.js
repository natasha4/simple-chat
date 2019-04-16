import React, { Component } from "react";

class Messages extends Component {
    
    render() {
        return (
            <div className="box is-marginless" id="messages">
                <ul>
                    {this.props.list.map((item) => <Message message={item} userName={this.props.userName}/>)}
                </ul>
            </div>
        )
    }
}

function Message(props) {
    let style = (props.userName === props.message.from ? 'has-text-black has-text-weight-bold' : 'has-text-primary has-text-weight-bold');
    let text = (props.userName === props.message.from ? 'Me' : props.message.from); 
    return <li><span className={style}>{text}:</span> {props.message.message}</li>;
}

export default Messages;