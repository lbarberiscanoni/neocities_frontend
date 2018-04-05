import React from "react";
import ReactDOM from "react-dom";
import Resources from "./Resources";
import Chat from "./Chat";
import Feed from "./Feed";
import Status from "./Status";
import TaskManager from "./TaskManager";
import Card from "./Card";

const API = require('../apiServiceObject');


/*this is the main view, through which all other views and components are renderd */
class MainView extends React.Component {
    
    constructor(props) {
        super(props)
        /* we should set the default here */

        this.state = {
            "location": "login",
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

    login() {
        //let token = document.getElementById("tokenInpt").value
        let api = new API("sessionKey", "particpantID");
        let token = 1
        api.getParticipant(token).then((participant) => {
            //the state now includes api so that calls can be made through the instance created above
            this.setState({"location": "home", participant, api})
        })
    }

    fuck() {
        //getting the sessionID once the component as mounted
        this.state.api.getSessions().then((res) => {
            let sessionID = res[0]["id"]

            this.setState({
                "sessionID": sessionID,
            })
        })
    }

    render() {
        switch(this.state.location) {
            case "login":
                return(
                    <div>
                        <input id="tokenInpt" placeholder="Enter Session Token" />
                        <button id="submit" onClick={ this.login.bind(this) }>Start</button>
                    </div>
                )
                break;
            case "home":
                return(
                    <div className="container">
                        <div className="row mt-4">
                            <Card>
                                <Resources resources={ this.state.participant.role.resources }/>
                            </Card>
                            <Card>
                                <Status />
                            </Card>
                            <Card>
                                <Feed />
                            </Card>
                        </div>
                        <div className="row mt-4">
                            <Card>
                                <TaskManager />
                            </Card>
                            <Card>
                                <Chat userName={ this.state.participant.name } />
                            </Card>
                        </div>
                    </div>
                )
                break;
        }
    }
}

ReactDOM.render(<MainView />, document.getElementById("main"))
