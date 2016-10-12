import * as React    from "react";
import * as ReactDOM from "react-dom";
import TableItemList from "./table-item-list";


export default class Table extends React.Component<{}, {}> {

    constructor () {
        super();

    }


    public render() {
        let tsx = (
            <table>
                <thead></thead>
                <TableItemList />
                <tfoot></tfoot>
                <caption></caption>
            </table>
        );
        return tsx;
    }

}