import * as React from "react";
import * as ReactDOM from "react-dom";

export class AlertTable extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    convertLevelToClassName = (level: string) => {
        switch (level) {
            case "严重":
                return "negative";
            case "正常":
                return "warning";
            case "离线":
                return "negative";
            case "恢复":
                return "positive";
            default:
                return "";
        }
    }

    render() {
        const that = this;
        const trs = [];
        Object.keys(that.props.data).forEach(function(key) {
            let item = that.props.data[key];
            trs.push(
                <tr className={that.convertLevelToClassName(item.level)}>
                    <td>{item.name}</td>
                    <td className="indicator">{item.level}</td>
                    <td>{item.type}</td>
                    <td>{item.time}</td>
                    <td className="left aligned">{item.log}</td>
                </tr>
            );
        })

        return (
            <div className="column">
                <table className="ui sortable selectable celled table edgy">
                    <thead className="center aligned">
                        <tr>
                            <th className="edgy dark-gray-bg">资源名</th>
                            <th className="edgy one wide dark-gray-bg">告警级别</th>
                            <th className="edgy dark-gray-bg">资源类型</th>
                            <th className="edgy four wide default-sort dark-gray-bg">告警时间</th>
                            <th className="edgy six wide no-sort dark-gray-bg">告警内容</th>
                        </tr>
                    </thead>
                    <tbody className="center aligned">
                        {trs}
                    </tbody>
                </table>
            </div>
        )
    }
}
