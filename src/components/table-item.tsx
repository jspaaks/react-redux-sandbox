import * as React    from "react";
import * as ReactDOM from "react-dom";
import Item          from "../item";


export default class TableItem extends React.Component<{}, {}> {

    constructor () {
        super();
    }


    public render() {
        let tsx = (
            <tr>
                <td>x</td>
                <td>word</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
        );
        return tsx;
    }

}