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
            "sessionID": 0
        }
    }

    log(participantID, quantity, resource) {
        //logging based on the format of the DB
        let timestamp = new Date

        let logOb = {
            "timestamp": timestamp,
            "action_type": false,
            "session": this.state.sessionID,
            "participant": participantID,
            "quantity": quantity,
            "resource": [resource],
        }
        console.log(this.state.api.createAction(logOb));
    }

    componentDidMount() {
        //getting the sessionID once the component as mounted
        this.state.api.getSessions().then((res) => {
            this.setState({
                "sessionID": res[0]["id"]
            })
        })
    }

    render() {
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
