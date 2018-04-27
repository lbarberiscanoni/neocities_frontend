import React from "react";
import ReactDOM from "react-dom";
const API = require('../apiServiceObject');

class Resources extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props)
    }

    cleanResources(){
      let resource_com = []
      this.props.data.resources.map((resource) => {
        let deployed = 0;
        this.props.data.resource_event_states.map((resource_event_state) =>{
          console.log("Resource ", resource_event_state["resource"], resource["id"])
          if(resource_event_state["resource"] == resource["id"]){
            deployed += parseInt(resource_event_state["deployed"])
          }
        });
        let resource_data = {"name": resource["name"], "deployed": deployed, "available": 3 }
        resource_com.push(resource_data)
      });
      return(resource_com)
    }

    render() {
        /*generating the components as part of a table */
        let components = []
        this.cleanResources().map((resource_data) => {
            let component = <tr><td> { resource_data["name"] } </td><td> { resource_data["deployed"] } / { resource_data["available"] } </td></tr>
            components.push(component)
        })

        return(
          <tbody>
              { components }
          </tbody>
        )
    }
}

export default Resources
