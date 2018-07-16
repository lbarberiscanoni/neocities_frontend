import React from "react";
import ReactDOM from "react-dom";
const API = require('../apiServiceObject');

class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return(
            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
