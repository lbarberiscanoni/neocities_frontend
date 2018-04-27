import React from "react";
import ReactDOM from "react-dom";
import Task from "./Task";

class TaskManager extends React.Component {

    constructor(props) {
        super(props)
        this.availableResources = this.props.data.participant.role.resources
        this.cleanedEvents = []
        this.props.data.events.map((event) => {
          let event_data = {event: event, state: []}
          this.props.data.resource_event_states.map((state) => {
            if(event["id"] == state["event"]){
              // Check if the event is completed
              event_data["state"].push(state)
            }
          });
          this.cleanedEvents.push(event_data)
        });
    }

    render() {
        /*generating a table for tasks */
        let tasks = []
        this.cleanedEvents.map((cleanedEvent) => {
            let component = <Task cleanedEvent = { cleanedEvent } resources = { this.availableResources } />
            tasks.push(component)
        })

        return(
            <table className="table table-striped">
                <thead>
                    <h3>Tasks</h3>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Responders</td>
                        <td>Status</td>
                    </tr>
                    { tasks }
                </tbody>
            </table>

        )
    }
}

export default TaskManager
