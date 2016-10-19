import * as React     from "react";
import * as ReactDOM  from "react-dom";
import Header         from "./header";
import Table          from "./table";
import TableItemAdder from "./table-item-adder";
import Footer         from "./footer";
import Item           from "./item";

type props = {
    title: string,
    items: Item[]
};
type state = {
};


export class PageLayout extends React.Component<props, state> {


    constructor() {
        // call super to inherit from React.Component
        super();
    }




    public render () {

        let tsx = (
            <div>
                <Header title={this.props.title} />
                <Table items={this.props.items} />
                <TableItemAdder />
                <Footer />
            </div>
        );
        return tsx;
    }


}