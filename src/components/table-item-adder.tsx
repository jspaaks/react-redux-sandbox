import * as React    from "react";


type props = {
};
type state = {
};

export default class TableItemAdder extends React.Component<props, state> {


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