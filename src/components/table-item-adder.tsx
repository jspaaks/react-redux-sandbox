import * as React    from "react";
import * as ReactDOM from "react-dom";
import Item          from "./item";


type props = {
    addItem: (item:Item) => {},
};
type state = {
};

export default class TableItemAdder extends React.Component<props, state> {


    constructor () {
        super();

    }


    public onClick(e:any) {

        // let word = e.target.value;
        console.error("still have to get text from input box ");
        let item: Item = new Item("word");
        this.props.addItem(item);
    }


    public render() {
        let tsx = (
            <form>
                <input type="text" defaultValue="Add word..."/>
                <input type="submit" onClick={this.onClick.bind(this)}/>
            </form>
        );
        return tsx;
    }

}