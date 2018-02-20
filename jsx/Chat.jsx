import React from "react";
import ReactDOM from "react-dom";

class Chat extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            "user": "Lorenzo",
            "messages": {
                "0": {"text": "hello world", "user": "Bekk"}, 
                "1": {"text": "nice to meet you", "user": "Rafa"}
            }
        }
    }

    writeMessage(event) {
        if (event.key == "Enter") {
            let newMessage = event.target.value;
            let lastNum = Object.keys(this.state.messages).length
            let newState = this.state.messages
            newState[lastNum] = { "user": this.state.user, "text": newMessage }
            console.log(newState);
            this.setState({"messages": newState})
        }
    }

    render() {
        let chat = []
        /*each message will have a "text" key and a "user" key so that I can differentiate */

        Object.values(this.state.messages).map((message) => {
            let chatRow = <p>[{ message["user"] }] { message["text"] } </p>
            chat.push(chatRow)
        })

        return(
            <div>
                <h3>Information Feed</h3>
                <ul>
                    { chat }
                </ul>
                <input placeholder="Write comment" onKeyPress={ this.writeMessage.bind(this) }></input>
            </div>
        )
    }
}

export default Chat