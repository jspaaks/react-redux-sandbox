import * as React    from "react";
import * as ReactDOM from "react-dom";


export default class TableItemAdder extends React.Component<{}, {}> {


    constructor () {
        super();

    }


    public render() {
        let tsx = (
            <form>
                <input type="text" defaultValue="Add word..."/>
                <input type="submit" />
            </form>
        );
        return tsx;
    }

}