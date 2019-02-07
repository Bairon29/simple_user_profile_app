import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
// import { store, history } from './reducers/store';
// import { BrowserRouter as Router, Route} from 'react-router-dom';


ReactDOM.render(
    <App />
, document.getElementById('root'));
{/* <Provider store={store}>
        <ConnectedRouter history={history}>
            <Router>
                <Route path="/" component={App} />
            </Router>
        </ConnectedRouter>
    </Provider> */}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
