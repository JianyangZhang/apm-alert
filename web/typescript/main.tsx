import * as React from "react";
import * as ReactDOM from "react-dom";
import AlertApp from "./components/Alert";
import DevTools from './devTools';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from "react-redux";
import { alertReducers } from "./reducers/alertReducers";

const enhancer = compose(
    applyMiddleware(thunkMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

let store = createStore(alertReducers, enhancer)

ReactDOM.render(
    <Provider store={store}>
        <AlertApp />
    </Provider>,
    document.getElementById('alert'),
)
