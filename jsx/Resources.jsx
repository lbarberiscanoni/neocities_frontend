import React from "react";
import ReactDOM from "react-dom";

class Resources extends React.Component {
    
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
            let available_deployed_pair = {"available": default_value, "deployed": 0}
            this.state.values[resource] = available_deployed_pair
        })
    }

    render() {
        /*generating the components as part of a table */
        let components = []
        Object.keys(this.state.values).map((resource) => {
            let component = <tr><td> { resource } </td><td> { this.state.values[resource]["available"] } </td><td> { this.state.values[resource]["deployed"] } </td></tr>
            components.push(component)
        })

        return(
            <table>
                <thead>
                    <h3>Your Resources</h3>
                </thead>
                <tbody>
                    <tr>
                        <td>Type</td>
                        <td>Available</td>
                        <td>Deployed</td>
                    </tr>
                    { components } 
                </tbody>
            </table>
        )
    }
}

export default Resources
