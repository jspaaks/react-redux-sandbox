import * as React    from "react";
import { connect }   from "react-redux";
import TableItemList from "./table-item-list";
import Item          from "./item";


type TableProps = {
};
type TableState = {
};

export default class Table extends React.Component<TableProps, TableState> {

    constructor () {
        super();
    }


    public render() {

        let ConnectedTableItemList = connect(TableItemList.mapStateToProps)(TableItemList);

        let tsx = (
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>bold</th>
                        <th>italic</th>
                        <th>underlined</th>
                    </tr>
                </thead>
                <ConnectedTableItemList />
                <tfoot></tfoot>
                <caption></caption>
            </table>
        );
        return tsx;
    }

}