import React from "react";
import ReactDOM from "react-dom";

class Chat extends React.Component {

    constructor(props) {
        super(props)
    }

    writeMessage(event) {
        if (event.key == "Enter") {
            let newMessage = event.target.value;
            let lastNum = Object.keys(this.state.messages).length
            let newState = this.state.messages
            this.props.api.createMessage({"participant": this.props.user.id, "text": newMessage, "chat_session": this.state.chatID}).then((data) => {
              console.log(data)
            });
        }
    }

    render() {
        this.state = {
            "user": this.props.user,
            "messages": this.props.chatSession.message_set,
            "chatID": this.props.chatSession.id
        }
        let chat = []
        /*each message will have a "text" key and a "user" key so that I can differentiate */

        let i = 0
        Object.values(this.state.messages).map((message) => {
            let chatRow = <p key={ i }>[{ message.participant_name }] { message["text"] } </p>
            chat.push(chatRow)
            i += 1
        })

        return(
            <div className = "chatBox">
                <h3>Chat</h3>
                <ul>
                    { chat }
                </ul>
                <input id="chatInpt" placeholder={ "@" + this.state.user.name } onKeyPress={ this.writeMessage.bind(this) }></input>
            </div>
        )
    }
}

export default Chat
