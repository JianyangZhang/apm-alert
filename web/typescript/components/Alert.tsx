import * as React from "react";
import * as ReactDOM from "react-dom";
import { assign } from 'lodash';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateAlerts } from "../actions/alertActions";
import { StatisticsPanel } from "./ui/alertUI/StatisticsPanel";
import { FiltersPanel } from "./ui/alertUI/FiltersPanel";
import { AlertTable } from "./ui/alertUI/AlertTable";

export class Alert extends React.Component<any, any> {
    private filter_items: any;
    constructor(props, context) {
        super(props, context);
        this.state = this.initState();
        this.filter_items = [
            { name: "严重", id: "filter_high", callback: () => { this.setState({ filters: assign({}, this.state.filters, { filter_high: !this.state.filters.filter_high }) }) } },
            { name: "一般", id: "filter_normal", callback: () => { this.setState({ filters: assign({}, this.state.filters, { filter_normal: !this.state.filters.filter_normal }) }) } },
            { name: "恢复", id: "filter_recover", callback: () => { this.setState({ filters: assign({}, this.state.filters, { filter_recover: !this.state.filters.filter_recover }) }) } },
            { name: "硬件", id: "filter_hardware", callback: () => { this.setState({ filters: assign({}, this.state.filters, { filter_hardware: !this.state.filters.filter_hardware }) }) } },
            { name: "软件", id: "filter_software", callback: () => { this.setState({ filters: assign({}, this.state.filters, { filter_software: !this.state.filters.filter_software }) }) } },
        ];
    }

    private initState = () => {
        return {
            filters: {
                filter_high: true,
                filter_normal: true,
                filter_recover: true,
                filter_software: true,
                filter_hardware: true,
            }
        };
    }

    render() {
        return (
            <div>
                <div className="ui two column divided grid container">
                    <div className="column">
                        <StatisticsPanel title={"硬件告警"} data={this.props.statistics.hardware} ></StatisticsPanel>
                    </div>
                    <div className="column">
                        <StatisticsPanel title={"软件告警"} data={this.props.statistics.software} ></StatisticsPanel>
                    </div>
                </div>
                <div className="ui container" id="search_row">
                    <FiltersPanel items={this.filter_items} status={this.state.filters} ></FiltersPanel>
                </div>
                <div className="ui one column grid container">
                    <AlertTable data={this.props.data} filters={this.state.filters} updateAlerts={this.props.updateAlerts}></AlertTable>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (storeState) => {
    return {
        data: storeState.alert.data,
        statistics: storeState.alert.statistics
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateAlerts
    }, dispatch);
}

const AlertApp = connect(mapStateToProps, mapDispatchToProps)(Alert);

export default AlertApp;
