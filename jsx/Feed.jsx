import React from "react";
import ReactDOM from "react-dom";

class Feed extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        let dummyData = ["announcement 1", "announcement 2", "announcement 3"]
        let components = []
        let i = 0
        dummyData.map((announcement) => {
            components.push(<section key={ i }> { announcement } </section>)
            i += 1
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
