import * as React      from "react";
import { createStore } from "redux";
import { render }      from "react-dom";
import { Provider }    from "react-redux";
import reducers        from "./reducers/reducers";
import App             from "./components/app";
import Item            from "./components/item";

let store = createStore(reducers);


render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById("container")
);