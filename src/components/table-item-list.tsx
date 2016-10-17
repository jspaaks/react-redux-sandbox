import * as ReactDOM from "react-dom";
import * as React    from "react";
import TableItem     from "./table-item";
import Item          from "./item";

type props = {
    items: Item[]
};
type state = {};

export default class TableItemList extends React.Component<props, state> {

    constructor () {
        super();
    }


    public render() {
        let tsx = (
            <tbody>
                {this.props.items.map((item) => {
                    return <TableItem item={item} key={item.id} />;
                })}
            </tbody>
        );
        return tsx;
    }

}