import * as ReactDOM from "react-dom";
import * as React    from "react";
import TableItem     from "./table-item";


export default class TableItemList extends React.Component<{}, {}> {

    constructor () {
        super();
    }


    public render() {
        let tsx = (
            <tbody>
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
            </tbody>
        );
        return tsx;
    }

}