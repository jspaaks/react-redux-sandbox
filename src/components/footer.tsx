import * as React from "react";
import * as ReactDOM from "react-dom";

export default class Footer extends React.Component<{}, {}> {

    constructor() {
        super();
    }

    public render() {
        let tsx = (
            <p className="footer">Made with React and TypeScript 2.0</p>
        );
        return tsx;
    }


}