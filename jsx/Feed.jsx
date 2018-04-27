import React from "react";
import ReactDOM from "react-dom";

class Feed extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        let components = []
        this.props.data.map((briefing) => {
            components.push(<section> { briefing["details"] } </section>)
        })

        return(
            <div>
                <h3>Information Feed</h3>
                { components }
            </div>
        )
    }
}

export default Feed
