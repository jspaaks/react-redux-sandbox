import * as React from "react";
import * as ReactDOM from "react-dom";

export default class Header extends React.Component<{}, {}> {

    constructor () {
        super();
    }

    public render() {
        let tsx = (
            <p className="header">WordStyler</p>
        );
        return tsx;
    }


}