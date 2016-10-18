import { createStore } from "redux";
import * as React      from "react";
import * as ReactDOM   from "react-dom";
import { PageLayout }  from "./components/page-layout";


export class App {

    constructor() {
        let container = document.getElementById("container");
        ReactDOM.render(<PageLayout />, container);
    }

}


let app:App = new App();
