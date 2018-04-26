import React from "react";
import ReactDOM from "react-dom";
import Task from "./Task";

class TaskManager extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            "tasks": {
                0: { "name": "Fire on Grand Street", "requirements": false, "status": false },
                1: { "name": "Car Crash on Market", "requirements": false, "status": false },
                2: { "name": "Kidnapping", "requirements": false, "status": false },
            }
        }
    }

    render() {
        /*generating a table for tasks */
        let tasks = []
        let i = 0
        Object.keys(this.state.tasks).map((key) => {
            let task = this.state.tasks[key]
            let component = <Task key={ i } num={ key } name={ task["name"] } requirements={ task["requirements"] } status={ task["status"] } />
            tasks.push(component)
            i += 1
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
