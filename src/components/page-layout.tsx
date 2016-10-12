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
    }

    public render () {

        console.log(this.props.words);
        let tsx = (
            <div>
                <Header />
                <Table />
                <TableItemAdder />
                <Footer />
            </div>
        );
        return tsx;
    }


}