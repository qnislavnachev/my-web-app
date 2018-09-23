import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import store from "./store/ReduxStore";


const Root = ({store}) => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(<Root store={store}/>, document.getElementById('my-web-app'));
registerServiceWorker();
