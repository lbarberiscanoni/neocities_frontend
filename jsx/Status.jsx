import React from "react";
import ReactDOM from "react-dom";

/*team status */
class Status extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            "values": {}
        }
        /*theoretically, the resources could be modified in the configuration, so the internal state should be generated from a list */
        let types_of_resources = ["patrol_cars", "investigators", "swat"]
        /*should inherit a default value from the game configuration */
        let default_value = 3

        types_of_resources.map((resource) => {
            let available_deployed_pair = {"available": 0, "deployed": default_value}
            this.state.values[resource] = available_deployed_pair
        })
    }

    render() {
        /*generating the components as part of a table */
        let components = []
        Object.keys(this.state.values).map((resource) => {
            let component = <tr><td> { resource } </td><td> { this.state.values[resource]["available"] } / { this.state.values[resource]["deployed"] } </td></tr>
            components.push(component)
        })

        return(
            <table className="table">
                <thead>
                    <h3>Team Status</h3>
                </thead>
                <tbody>
                    { components } 
                </tbody>
            </table>
        )
    }
}

export default Status
