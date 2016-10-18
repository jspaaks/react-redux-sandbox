import { createStore } from "redux";
import * as React      from "react";
import * as ReactDOM   from "react-dom";
import { PageLayout }  from "./components/page-layout";


let container = document.getElementById("container");

ReactDOM.render(<PageLayout />, container);



