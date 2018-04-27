import React from "react";
import ReactDOM from "react-dom";
import PersonalResources from "./PersonalResources";
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
            "action_type": "DEPLOY",
            "session": this.state.sessionID,
            "participant": this.props.api.participant,
            "quantity": quantity,
            "resource": resource,
        }
        // console.log(this.state.api.createAction(logOb));
    }

    login() {
        let participantID = document.getElementById("tokenInpt").value
        let api = new API(participantID);
        api.login.then((initial) => {
            api.participant = initial.data["participant"]
            api.header = {'Api-Key': initial.data["sessionToken"], 'participantID': participantID}
            api.dynamicData = new WebSocket('ws://' + "127.0.0.1:8000" + '/ws/api/dynamic_data/' + initial.data["sessionToken"] + '/')
            //the state now includes api so that calls can be made through the instance created above
            api.session = initial.data.sessionID
            api.getParticipant(api.participant).then((participant) =>{
              this.setState({"location": "home", "participant": participant,
                "api": api, "resource_event_states": initial.data["ResourceEventStates"],
                "events": initial.data["Events"], "briefing": initial.data["Briefing"]})
            });

            api.dynamicData.onmessage = (e) => {
              console.log(JSON.parse(JSON.parse(e.data)['text']))
              this.setState({"resource_event_states": JSON.parse(JSON.parse(e.data)['text'])['resource_event_state']})
            }
        })
    }

    render() {
        switch(this.state.location) {
            case "login":
                return(
                    <div>
                        <input id="tokenInpt" placeholder="Enter Participant Token" />
                        <button id="submit" onClick={ this.login.bind(this) }>Start</button>
                    </div>
                )
                break;
            case "home":
                { console.log(this.state) }
                return(
                    <div className="container">
                        <div className="row mt-4">
                            <Card>
                                <PersonalResources data = { this.state }/>
                            </Card>
                            <Card>
                                <Status data = { this.state }/>
                            </Card>
                            <Card>
                                <Feed data = { this.state.briefing }/>
                            </Card>
                        </div>
                        <div className="row mt-4">
                            <Card>
                                <TaskManager data = { this.state } />
                            </Card>
                            <Card>
                                <Chat userName = { this.state.participant.name } />
                            </Card>
                        </div>
                    </div>
                )
                break;
        }
    }
}

ReactDOM.render(<MainView />, document.getElementById("main"))
