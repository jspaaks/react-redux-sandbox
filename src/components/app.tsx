
import * as React      from "react";
import * as ReactDOM   from "react-dom";
import { PageLayout }  from "./page-layout";
import Item            from "./item";


type AppProps = {
};

type AppState = {
    title: string,
    items: Array<Item>
};

export default class App extends React.Component<AppProps, AppState> {

    constructor(store: any) {
        super();
        this.state = store.getState();
        let container = document.getElementById("container");
        ReactDOM.render(<PageLayout title={this.state.title} items={this.state.items}/>, container);
    }
}

