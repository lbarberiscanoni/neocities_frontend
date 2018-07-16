import React from "react";
import ReactDOM from "react-dom";
import Task from "./Task";

class TaskManager extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props.data)
        this.availableResources = this.props.data.participant.role.resourcedepot_set
    }

    render() {
        this.cleanedEvents = []
        this.props.data.events.map((event) => {
          let event_data = {event: event, state: []}
          this.props.data.resource_event_states.map((state) => {
            console.log("event stuff: ", event.id, state)
            if(event.id == state.event.id){
              // Check if the event is completed
              event_data["state"].push(state)
            }
          });
          console.log(event_data)
          this.cleanedEvents.push(event_data)
        });
        /*generating a table for tasks */
        let tasks = []
        this.cleanedEvents.map((cleanedEvent) => {
            console.log("Cleaned Event" + cleanedEvent)
            let component = <Task key= { cleanedEvent.event.description } cleanedEvent = { cleanedEvent } resourcedepot_set = { this.availableResources } api = {this.props.data.api}/>
            tasks.push(component)
        })

        return(
            <table className="table table-striped">
                <thead>
                  <tr>
                    <td>
                      <h3>Tasks</h3>
                    </td>
                  </tr>
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
