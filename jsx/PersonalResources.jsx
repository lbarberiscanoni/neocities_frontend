import React from "react";
import ReactDOM from "react-dom";
const API = require('../apiServiceObject');
import Resources from "./Resources";

class PersonalResources extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return(
            <table className="table">
                <thead>
                    <h3>Your Resources</h3>
                </thead>
                  <Resources data = { {resources: this.props.data.participant.role.resources,  resource_event_states: this.props.data.resource_event_states} }/>
            </table>
        )
    }
}

export default PersonalResources
