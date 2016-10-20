import * as React    from "react";


type props = {
};
type state = {
};

export default class TableItemAdder extends React.Component<props, state> {


    constructor () {
        super();

        // make sure that instances of this class refer to the correct
        // 'this' when calling the .handleOnClick() method by binding it to the
        // this from the current context.
        this.handleOnClick = this.handleOnClick.bind(this);

    }


    public handleOnClick(event:any) {
        console.log("...from TableItemAdder.handleOnonClick: ", event.target);
    }

    public render() {
        let tsx = (
            <form>
                <input type="text" defaultValue="Add word..."/>
                <input type="submit" onClick={this.handleOnClick}/>
            </form>
        );
        return tsx;
    }

}