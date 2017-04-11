import { combineReducers } from "redux";
import { assign } from 'lodash';
import { simulated_alerts } from "../constants/simulated_alerts";

const defaultState = simulated_alerts;

const alertReducer = (previousState = defaultState, action) => {
    switch (action.type) {
        case "RECEIVED_ALERTS":
            console.log("获取数据成功");
            return action.alerts;
        case "FETCH_ALERTS_ERROR":
            console.log("获取数据失败: ", action.error);
            return previousState /*{
                data: { "": { id: "", name: "", type: "", level: "", time: "", log: "" } },
                statistics: {
                    hardware: {
                        link: { online: -1, offline: -1, recover: -1 },
                        load: { high: -1, normal: -1, recover: -1 }
                    },
                    software: {
                        link: { online: -1, offline: -1, recover: -1 },
                        load: { high: -1, normal: -1, recover: -1 }
                    }
                }
            }*/
        case "FETCHING_ALERTS":
            console.log("正在请求数据...");
        default:
            return previousState;
    }
}

export const alertReducers = combineReducers({
    alert: alertReducer
});
