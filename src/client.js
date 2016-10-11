"use strict";
var redux_1 = require("redux");
var item_1 = require("./item");
var initstate = [];
function reducer(state, action) {
    if (state === void 0) { state = initstate; }
    console.log("state before", state);
    switch (action.type) {
        case "TOGGLE_BOLD": {
            console.log("toggling bold");
            // find matching element of state
            // toggle the bold key
            console.log("state after", state);
            return state;
        }
        case "TOGGLE_ITALIC": {
            console.log("toggling italic");
            // find matching element of state
            // toggle the italic key
            console.log("state after", state);
            return state;
        }
        case "TOGGLE_UNDERLINED": {
            console.log("toggling underlined");
            // find matching element of state
            // toggle the underlined key
            console.log("state after", state);
            return state;
        }
        case "ADD_ITEM": {
            console.log("adding item");
            state = state.concat([action.item]);
            console.log("state after", state);
            return state;
        }
        case "REMOVE_ITEM": {
            console.log("removing item");
            // filter out the matching element of state
            console.log("state after", state);
            return state;
        }
        default: {
            console.log("Not sure what you mean");
            console.log("state after", state);
            return state;
        }
    }
}
var store = redux_1.createStore(reducer);
var f = function () {
    store.dispatch({
        type: "ADD_ITEM",
        item: new item_1.Item(Date.now().toString(), false, false, false)
    });
};
window.setTimeout(f, 2000);
window.setTimeout(f, 4000);
window.setTimeout(function () { store.dispatch({ type: "TOGGLE_BOLD" }); }, 6000);
window.setTimeout(function () { store.dispatch({ type: "TOGGLE_ITALIC" }); }, 8000);
window.setTimeout(function () { store.dispatch({ type: "TOGGLE_UNDERLINED" }); }, 10000);
