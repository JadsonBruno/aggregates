import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from 'src/components/App';
import * as serviceWorker from './serviceWorker';
import reducers from 'src/aggregates/index';
import Store from 'src/store/index';

// combine reducers
const reducer = Store.combineReducers(reducers);

// create global redux store
const store = Store.create(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
