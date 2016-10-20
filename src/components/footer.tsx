import * as React from "react";


export default class Footer extends React.Component<{}, {}> {

    constructor() {
        super();
    }

    public render() {
        let tsx = (
            <p className="footer">Made with React, Redux, react-redux, and TypeScript 2.0</p>
        );
        return tsx;
    }


}