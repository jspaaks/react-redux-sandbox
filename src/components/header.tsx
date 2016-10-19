import * as React     from "react";


type props = {
    title: string,
};
type state = {
};

export default class Header extends React.Component<props, state> {

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