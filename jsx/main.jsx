import React from "react";
import ReactDOM from "react-dom";
import Resources from "./Resources";
import Chat from "./Chat";
import Feed from "./Feed";

/*this is the main view, through which all other views and components are renderd */
class MainView extends React.Component {
    
    constructor(props) {
        super(props)
        /* we should set the default here */
        this.state = {
            "location": "home"
        }
    }

    render() {
        switch(this.state.location) {
            case "home":
                return(
                    <div>
                        <Resources />
                        <Chat />
                        <Feed />
                    </div>
                )
                break;
        }
    }
}

ReactDOM.render(<MainView />, document.getElementById("main"))
