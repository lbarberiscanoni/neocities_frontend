import React from "react";
import ReactDOM from "react-dom";
import Resources from "./Resources";
import Chat from "./Chat";
import Feed from "./Feed";
import Status from "./Status";
import TaskManager from "./TaskManager";

const API = require('../apiServiceObject');


/*this is the main view, through which all other views and components are renderd */
class MainView extends React.Component {
    
    constructor(props) {
        super(props)
        /* we should set the default here */
        let api = new API("sessionKey", "particpantID");

        this.state = {
            "location": "home",
            "api": api,
        }
    }

    log(sessionID, participantID, quantity, resource) {
        let timestamp = new Date
        console.log(timestamp+"the hell?")
        let logOb = {
            "timestamp": timestamp,
            "action_type": false,
            "session": sessionID,
            "participant": participantID,
            "quantity": quantity,
            "resource": [resource],
        }
        console.log(this.state.api);
        console.log(this.state.api.createAction(logOb))
    }

    render() {
        this.log(1, 1, 4, 1);
        switch(this.state.location) {
            case "home":
                return(
                    <div>
                        <Resources />
                        <Chat />
                        <Feed />
                        <Status />
                        <TaskManager />
                    </div>
                )
                break;
        }
    }
}

ReactDOM.render(<MainView />, document.getElementById("main"))
