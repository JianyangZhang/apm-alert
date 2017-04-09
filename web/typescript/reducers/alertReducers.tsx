import { combineReducers } from "redux";
import { assign } from 'lodash';
import { simulated_alerts } from "../constants/simulated_alerts";

const defaultState = simulated_alerts;

const alertReducer = (previousState = defaultState, action) => {
    switch (action.type) {
        default:
            // console.log("reducer exec");
            return previousState;
    }
}

export const alertReducers = combineReducers({
    alert: alertReducer
});
