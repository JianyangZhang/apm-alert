import * as React from "react";
import * as ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { StatisticsPanel } from "./ui/alertUI/StatisticsPanel";
import { SearchPanel } from "./ui/alertUI/SearchPanel";
import { AlertTable } from "./ui/alertUI/AlertTable";

export class Alert extends React.Component<any, any> {
    private search_items: any;
    constructor(props, context) {
        super(props, context);
        this.state = this.initState();
        this.search_items = [
            { name: "搜索资源", id: "search_id", type: "search", callback: (search_id) => { this.setState({ search_id: search_id }); } },
            { name: "搜索内容", id: "search_log", type: "search", callback: (search_log) => { this.setState({ search_log: search_log }); } },
            { name: "在线", id: "search_online", type: "filter", callback: () => { this.setState({ search_online: !this.state.search_online }) } },
            { name: "离线", id: "search_offline", type: "filter", callback: () => { this.setState({ search_offline: !this.state.search_offline }) } },
            { name: "严重", id: "search_high", type: "filter", callback: () => { this.setState({ search_high: !this.state.search_high }) } },
            { name: "普通", id: "search_normal", type: "filter", callback: () => { this.setState({ search_normal: !this.state.search_normal }) } },
            { name: "恢复", id: "search_recover", type: "filter", callback: () => { this.setState({ search_recover: !this.state.search_recover }) } },
            { name: "硬件", id: "search_software", type: "filter", callback: () => { this.setState({ search_software: !this.state.search_software }) } },
            { name: "软件", id: "search_hardware", type: "filter", callback: () => { this.setState({ search_hardware: !this.state.search_hardware }) } },
        ];
    }

    private initState = () => {
        return {
            search_id: "",
            search_log: "",
            search_online: true,
            search_offline: true,
            search_high: true,
            search_normal: true,
            search_recover: true,
            search_software: true,
            search_hardware: true,
            search_start: "",
            search_end: ""
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
                <div className="ui container" id="search-row">
                    <SearchPanel searchItems={this.search_items} searchStatus={this.state} ></SearchPanel>
                </div>
                <div className="ui one column grid container">
                    <AlertTable data={this.props.data}></AlertTable>
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
    }, dispatch);
}

const AlertApp = connect(mapStateToProps, mapDispatchToProps)(Alert);

export default AlertApp;
