import * as React    from "react";
import * as ReactDOM from "react-dom";
import Item          from "./item";

type props = {
    item: Item
};
type state = {
};

export default class TableItem extends React.Component<props, state> {

    constructor () {
        super();
    }


    public render() {

        let tsx = (
            <tr>
                <td>{this.props.item.word}</td>
                <td>{this.props.item.isbold ? "1" : "0"}</td>
                <td>{this.props.item.isitalic ? "1" : "0"}</td>
                <td>{this.props.item.isunderlined ? "1" : "0"}</td>
                <td>{this.props.item.serialized.toString()}</td>
            </tr>
        );
        return tsx;
    }

}