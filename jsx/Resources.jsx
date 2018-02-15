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
        let default_value = 0

        types_of_resources.map((resource) => {
            this.state.values[resource] = default_value
        })
    }

    render() {
        /*generating the components as part of a table */
        let components = []
        Object.keys(this.state.values).map((resource) => {
            let component = <tr><td> { resource } </td><td> { this.state.values[resource] } </td></tr>
            components.push(component)
        })

        return(
            <table>
                <th>Resources</th>
                { components } 
            </table>
        )
    }
}

export default Resources
