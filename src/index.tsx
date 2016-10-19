import { createStore } from "redux";
import reducers from "./reducers/reducers";
import App from "./components/app";
import Item from "./components/item";

let store = createStore(reducers);
let unsubscribe = store.subscribe(() => {
    console.log("from subscribed: ", store.getState());
});

let app:App = new App(store);



// dispatch a bunch of new actions
store.dispatch({
    type: "CHANGE_HEADER",
    text: "TextStylerz"
});

store.dispatch({
    type: "ADD_ITEM",
    item: new Item(Date.now().toString(), false, false, false)
});

store.dispatch({
        type: "TOGGLE_BOLD",
        id: 0
    });

store.dispatch({
        type: "TOGGLE_ITALIC",
        id: 0
    });

store.dispatch({
    type: "TOGGLE_UNDERLINED",
    id: 0
});

// stop listening to state updates
unsubscribe();



