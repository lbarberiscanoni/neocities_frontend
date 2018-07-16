import React from "react";
import ReactDOM from "react-dom";

class Task extends React.Component {

    constructor(props) {
        super(props)
    }

    sendResource(resource_id, event_id){
      let timestamp = new Date
      let value = document.getElementById("send" + resource_id + "-" + event_id).value

      let logOb = {
          "timestamp": timestamp,
          "action_type": "DEPLOY",
          "session": this.props.api.session,
          "participant": this.props.api.participant,
          "quantity": value,
          "resource": resource_id,
          "event": event_id
      }
      this.props.api.createAction(logOb)
    }

    recallResource(resource_id, event_id){
      let timestamp = new Date
      let value = document.getElementById("recall" + resource_id + "-" + event_id).value

      let logOb = {
          "timestamp": timestamp,
          "action_type": "RECALL",
          "session": this.props.api.session,
          "participant": this.props.api.participant,
          "quantity": value,
          "resource": resource_id,
          "event": event_id
      }
      this.props.api.createAction(logOb)
    }

    render() {
        this.success = "Incomplete"
        this.deploySelects = []
        this.deployedResources = []
        let reset = true
        this.props.cleanedEvent["state"].map((state) => {
            this.props.resourcedepot_set.map((resource_depot) => {
              let deployOptions = []
              let recallOptions = []
              if(resource_depot.resource.id == state.resource.id){
                if(state["success"]){
                  this.success = "Completed"
                }
                if(state["deployed"] > 0){
                  reset = false
                  this.deployedResources.push(<tr key = { resource_depot.resource.name } > { resource_depot.resource.name } </tr>)
                }
              for (let i = 0; i <= resource_depot["quantity"] - state["deployed"]; i++){
                deployOptions.push(<option key = { i } className="dropdown-item" value={i}> {i} </option>)
              }

              for (let i = 0; i <= state["available"]; i++){
                recallOptions.push(<option key = { i } className="dropdown-item" value={i}> {i} </option>)
              }

              this.deploySelects.push(
                <div> { resource_depot.resource.name }
                  <div>
                    <select id={ "send" + resource_depot.resource.id + "-" + state.event.id } className="dropdown"> {deployOptions} </select>
                    <button onClick={ this.sendResource.bind(this, resource_depot.resource.id, state.event.id) }>Send</button>
                  </div>

                  <div>
                    <select id={ "recall" + resource_depot.resource.id + "-" + state.event.id } className="dropdown"> {recallOptions} </select>
                    <button onClick={ this.recallResource.bind(this, resource_depot.resource.id, state.event.id) }>Recall</button>
                  </div>
                </div>)
              }
            })
        });
        if(reset){
          this.deployedResources = []
        }
        return(
            <tr>
                <td> { this.props.cleanedEvent.event.description } </td>
                { this.deployedResources }
                <td>
                    <div className="dropdown">
                        { this.deploySelects }
                    </div>
                </td>
                <td> { this.success } </td>
            </tr>

        )
    }
}

export default Task
