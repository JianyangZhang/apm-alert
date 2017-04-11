import 'isomorphic-fetch';

export const updateAlerts = () => {
    return (dispatch, getState) => {
        dispatch({ type: "FETCHING_ALERTS" });
        return fetch("./sample.php", {
            method: 'POST',
            body: "",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(alerts => {
            dispatch({ type: "RECEIVED_ALERTS", alerts });
        }).catch(error => {
            dispatch({ type: "FETCH_ALERTS_ERROR", error });
        });
    }
}
