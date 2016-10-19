import * as React     from "react";
import * as ReactDOM  from "react-dom";


type props = {
    title: string,
};

export default class Header extends React.Component<props, {}> {

    constructor () {
        super();
    }


    public render() {
        let tsx = (
            <div>
                <p className="header">{this.props.title}</p>
                <input defaultValue="type here" />
            </div>
        );
        return tsx;
    }


}