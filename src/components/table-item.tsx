import * as React    from "react";
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

        let hexBallotBox = {
            withCheck: "\u2611",
            withoutCheck: "\u2610"
        };

        let tsx = (
            <tr>
                <td>{this.props.item.word}</td>
                <td>{this.props.item.isbold ? hexBallotBox.withCheck :  hexBallotBox.withoutCheck}</td>
                <td>{this.props.item.isitalic ? hexBallotBox.withCheck :  hexBallotBox.withoutCheck}</td>
                <td>{this.props.item.isunderlined ? hexBallotBox.withCheck :  hexBallotBox.withoutCheck}</td>
                <td>{this.props.item.serialized.toString()}</td>
            </tr>
        );
        return tsx;
    }

}