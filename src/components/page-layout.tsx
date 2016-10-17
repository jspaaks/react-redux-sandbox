import * as React     from "react";
import * as ReactDOM  from "react-dom";
import Header         from "./header";
import Table          from "./table";
import TableItemAdder from "./table-item-adder";
import Footer         from "./footer";
import Item           from "./item";




/**
 * Parent container for the entire example
 */
export class PageLayout extends React.Component<any, any> {


    constructor() {
        // call super to inherit from React.Component
        super();
        this.state = {
            title: "WordStylerz",
            items: [
                new Item("no style", false, false, false),
                new Item("onlybold", true, false, false),
                new Item("only italic", false, true, false),
                new Item("bold+italic", true, true, false),
                new Item("only underlined", false, false, true),
                new Item("bold + underlined", true, false, true),
                new Item("italic + underlined", false, true, true),
                new Item("bold+italic+underlined", true, true, true)
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
                <Table items={this.state.items}/>
                <TableItemAdder />
                <Footer />
            </div>
        );
        return tsx;
    }


}