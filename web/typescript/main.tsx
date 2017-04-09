import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { alertReducers } from "./reducers/alertReducers";
import AlertApp from "./components/Alert";

let store = createStore(alertReducers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <AlertApp />
    </Provider>,
    document.getElementById('alert'),
)
