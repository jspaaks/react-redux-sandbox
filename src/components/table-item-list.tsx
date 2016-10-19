import * as React    from "react";
import TableItem     from "./table-item";
import Item          from "./item";

type props = {
    items: Array<Item>
};
type state = {};

export default class TableItemList extends React.Component<props, state> {

    constructor () {
        super();
    }


    public render() {

        let tableItemList = this.props.items.map((item) => {
            return <TableItem item={item} key={item.id} />;
        });

        let tsx = (
            <tbody>
                {tableItemList}
            </tbody>
        );
        return tsx;
    }

}