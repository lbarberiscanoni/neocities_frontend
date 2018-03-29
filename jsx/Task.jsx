import React from "react";
import ReactDOM from "react-dom";

class Task extends React.Component {
    
    constructor(props) {
        super(props)
        /* it will inherit as a property from the task manager */
        this.state = {
            "resources": ["patrol_cars", "investigators", "swat"]
        }
    }

    render() {
        //console.log(this.props);
        return(
            <tr>
                <td> { this.props.name } </td>
                <td> { this.props.requirements } </td>
                <td>
                    <select>
                        <option value="" defaultValue="selected">Allocate Resource</option>
                        { 
                            this.state.resources.map((resource) => 
                                <option> { resource } </option>
                            )
                        }
                    </select>
                </td>
                <td> { this.props.status } </td>
            </tr>

        )
    }
}

export default Task
