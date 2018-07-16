import React from "react";
import ReactDOM from "react-dom";
import Resources from "./Resources";

/*team status */
class Status extends React.Component {

    constructor(props) {
        super(props)
        this.teamMateResources = []

        this.props.data.participant.session.scenario_ran.roles.map((role) =>{
          if(role["id"] != this.props.data.participant.role["id"]){
            role.resourcedepot_set.map((resource) =>{
                this.teamMateResources.push(resource)
            });
          }
        });
    }

    render() {
        return(
            <table className="table">
                <thead>
                  <tr>
                    <th>
                      <h3>Team Status</h3>
                    </th>
                  </tr>
                </thead>
                  <Resources data = { {resourcedepot_set: this.teamMateResources,  resource_event_states: this.props.data.resource_event_states} }/>
            </table>
        )
    }
}

export default Status
