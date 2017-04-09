import * as React from "react";
import * as ReactDOM from "react-dom";

export class SearchPanel extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const labelStyle = {
            paddingLeft: "1.4em",
            paddingRight: "0.7em"
        }
        const searchStyle = {
            marginRight: "0.6em"
        }
        return (
            <div>
                {
                    this.props.searchItems.map((item, index) => {
                        if (item.type == "search") {
                            return (
                                <div key={index} className="ui search inline">
                                    <div className="ui icon input" style={searchStyle}>
                                        <input className="prompt edgy" type="text" placeholder={item.name} />
                                        <i className="search icon"></i>
                                    </div>
                                </div>
                            )
                        }
                        if (item.type == "filter") {
                            return (
                                <div key={index} className="ui checkbox inline">
                                    <input type="checkbox" checked={this.props.searchStatus[item.id] ? true : false} onChange={item.callback} />
                                    <label style={labelStyle}>{item.name}</label>
                                </div>
                            )
                        }
                    })
                }
            </div>
        );
    }
}
