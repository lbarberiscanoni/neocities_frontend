import React from "react";
import ReactDOM from "react-dom";

class Task extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        //console.log(this.props);
        this.deployedResources = []
        this.props.cleanedEvent["state"].map((state) =>{
          if(state["deployed"] > 0){
            this.props.resources.map((resource) =>{
              if(resource["id"] == state["resource"]){
                this.deployedResources.push(<tr> { resource["name"] } </tr>)
              }
            })
          }
        });
        console.log(this.props)
        return(
            <tr>
                <td> { this.props.cleanedEvent.event.description } </td>
                { this.deployedResources }
                <td>
                    <div className="dropdown">
                        <option className="dropdown-item" value="" defaultValue="selected">Allocate Resource</option>
                        {
                            this.props.resources.map((resource) =>
                                <option className="dropdown-item"> { resource.name } </option>
                            )
                        }
                    </div>
                </td>
                <td> { this.props.status } </td>
            </tr>

        )
    }
}

export default Task
