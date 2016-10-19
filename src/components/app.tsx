
import * as React      from "react";
import Item            from "./item";
import { PageLayout }  from "./page-layout";


type AppProps = {
};

type AppState = {
    title: string,
    items: Array<Item>
};

export default class App extends React.Component<AppProps, AppState> {

    constructor() {
        super();
    }


    public render() {
        let tsx = (
            <PageLayout title={this.state.title} items={this.state.items}/>
        );
        return tsx;
    }
}

