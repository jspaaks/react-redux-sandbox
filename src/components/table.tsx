import * as React    from "react";
import * as ReactDOM from "react-dom";
import TableItemList from "./table-item-list";
import Item          from "./item";


type props = {
    items: Item[]
};
type state = {};

export default class Table extends React.Component<props, state> {

    constructor () {
        super();
    }


    public render() {
        let tsx = (
            <table>
                <thead></thead>
                <TableItemList items={this.props.items} />
                <tfoot></tfoot>
                <caption></caption>
            </table>
        );
        return tsx;
    }

}