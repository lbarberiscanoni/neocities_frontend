import React from "react";
import ReactDOM from "react-dom";
import PersonalResources from "./PersonalResources";
import Chat from "./Chat";
import Feed from "./Feed";
import Status from "./Status";
import TaskManager from "./TaskManager";
import Card from "./Card";

const API = require('../apiServiceObject');


/* This is the main view, through which all other views and components are renderd */
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
            "session": this.state.api.sessionID,
            "participant": this.props.api.participant,
            "quantity": quantity,
            "resource": resource,
        }
    }

    login() {
        let participantID = document.getElementById("tokenInpt").value
        let api = new API(participantID);
        api.login.then((initial) => {
            api.participant = initial.data["participant"]
            api.header = {'Api-Key': initial.data["sessionToken"], 'participantID': participantID}
            api.dynamicData = new WebSocket('wss://' + "neocities.herokuapp.com" + '/ws/api/dynamic_data/' + initial.data["sessionToken"] + '/')
            // The state now includes api so that calls can be made through the instance created above
            api.session = initial.data.sessionID
            api.getParticipant(api.participant).then((participant) => {
              this.setState({"location": "home", "participant": participant,
                "api": api, "resource_event_states": initial.data["ResourceEventStates"],
                "events": initial.data["Events"], "briefing": initial.data["Briefing"], "chat_session": initial.data.ChatSession})
            });

            api.dynamicData.onmessage = (e) => {
              let parsedData = JSON.parse(JSON.parse(e.data)['text'])
              if(parsedData["ChatSession"]){
                this.setState({"chat_session": parsedData['ChatSession']})
              }else{
                this.setState({"resource_event_states": parsedData['resource_event_state']})
              }
            }
        })
    }

    render() {
        switch(this.state.location) {
            case "login":
                return(
                    <div className="container">
                        <div className="row mt-4">
                          <div className="col-4">
                            Text here
                          </div>
                          <div className="col-4">
                            <input id="tokenInpt" className="form-control" placeholder="Enter Participant Token" />
                            <button id="submit" className="form-control" onClick={ this.login.bind(this) }>Start</button>
                          </div>
                         </div>
                    </div>
                )
                break;
            case "home":
                return(
                    <div className="container">
                        <div className="row mt-4">
                          <div className="col-4">{ this.state.participant.session.sessionKey }</div>
                        </div>
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
                                <Chat api = { this.state.api } chatSession = { this.state.chat_session } user = { this.state.participant } />
                            </Card>
                        </div>
                    </div>
                )
                break;
        }
    }
}

ReactDOM.render(<MainView />, document.getElementById("main"))
