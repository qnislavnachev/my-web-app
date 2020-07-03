import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginPage from "./login/LoginPage";
import UserGreetings from "./UserGreetings";

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LoginPage}/>
                    <Route exact path="/hello" component={UserGreetings}/>
                </div>
            </Router>
        )
    }
}

export default AppRouter;