import React, {Component} from 'react';
import AppRouter from "./components/AppRouter";
import ApplicationBar from "./components/appbar/ApplicationBar";

class App extends Component {
    render() {
        return (
            <div>
                <ApplicationBar/>
                <AppRouter/>
            </div>
        );
    }
}

export default App;
