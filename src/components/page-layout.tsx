import * as React     from "react";
import * as ReactDOM  from "react-dom";
import Header         from "./header";
import Table          from "./table";
import TableItemAdder from "./table-item-adder";
import Footer         from "./footer";
import Item           from "../item";




/**
 * Parent container for the entire example
 */
export class PageLayout extends React.Component<any, any> {


    constructor() {
        // call super to inherit from React.Component
        super();
        this.state = {
            title: "WordStylerz",
            words: [
                new Item("firstword"),
                new Item("secondword"),
                new Item("thirdword")
            ]
        };
    }


    public changeTitle(title: string): PageLayout {
        // not react / flux compliant:
        this.state.title = title;
        this.setState(this.state);
        return this;
    }


    public render () {

        let tsx = (
            <div>
                <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
                <Table />
                <TableItemAdder />
                <Footer />
            </div>
        );
        return tsx;
    }


}