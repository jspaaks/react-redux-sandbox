import * as React from "react";
import * as ReactDOM from "react-dom";

import { PageLayout } from "./page-layout";


type props = {
    title:string,
    changeTitle: (title:string) => PageLayout
};

export default class Header extends React.Component<props, {}> {

    constructor () {
        super();
    }

    public onChange(e: any) {
        // e is the event you get from the 'input' element
        let str: string = "A whole new title " + Date.now().toString() + e.target.value;
        this.props.changeTitle(str);
    }


    public render() {
        let tsx = (
            <div>
                <p className="header">{this.props.title}</p>
                <input defaultValue="type here" onChange={this.onChange.bind(this)}/>
            </div>
        );
        return tsx;
    }


}