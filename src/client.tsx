import { createStore } from "redux";
import * as React      from "react";
import * as ReactDOM   from "react-dom";
import { PageLayout }  from "./components/page-layout";
import Item            from "./item";


let container = document.getElementById("container");

ReactDOM.render(<PageLayout />, container);



//
// let initstate: Array<Item> = [];
//
// function reducer (state = initstate, action: any) {
//
//     console.log("\nstate before", state);
//
//     let obj: Item;
//     let byIdFun = function (item: Item): boolean {
//         let matches: boolean = item.id === action.id;
//         if (matches) {
//             let retainId = true;
//             obj = item.clone(retainId);
//             if (retainId) {
//                 item = null;
//             }
//         }
//         return !matches;
//     };
//
//     switch (action.type) {
//         case "TOGGLE_BOLD": {
//             console.log("toggling bold of item with id=" + action.id.toString());
//             state = state.filter(byIdFun);
//             // toggle the state of isbold
//             obj.toggle("bold");
//             state = state.concat(obj);
//             console.log("state after", state);
//             return state;
//         }
//         case "TOGGLE_ITALIC": {
//             console.log("toggling italic of item with id=" + action.id.toString());
//             state = state.filter(byIdFun);
//             // toggle the state of isitalic
//             obj.toggle("italic");
//             state = state.concat(obj);
//             console.log("state after", state);
//             return state;
//         }
//         case "TOGGLE_UNDERLINED": {
//             console.log("toggling underlined of item with id=" + action.id.toString());
//             state = state.filter(byIdFun);
//             // toggle the state of isunderlined
//             obj.toggle("underlined");
//             state = state.concat(obj);
//             console.log("state after", state);
//             return state;
//         }
//         case "ADD_ITEM": {
//             console.log("adding item");
//             state = [...state, action.item];
//             console.log("state after", state);
//             return state;
//         }
//         case "REMOVE_ITEM": {
//             console.log("removing item with id=" + action.id.toString());
//             // filter out the matching element of state
//             state = state.filter(byIdFun);
//             console.log("state after", state);
//             return state;
//         }
//         default: {
//             console.log("Not sure what you mean");
//             console.log("state after", state);
//             return state;
//         }
//     }
// }
//
//
// let store = createStore(reducer);
//
//
// let f = function() {store.dispatch({
//         type: "ADD_ITEM",
//         item: new Item(Date.now().toString(), false, false, false)
//     }); };
//
// window.setTimeout(f, 1000);
// window.setTimeout(f, 1500);
// window.setTimeout(f, 2000);
// window.setTimeout(f, 2500);
// window.setTimeout(f, 3000);
// window.setTimeout(f, 3500);
// window.setTimeout(f, 4000);
//
// window.setTimeout(function(){store.dispatch({type: "TOGGLE_BOLD", id: 0}); }, 6000);
// window.setTimeout(function(){store.dispatch({type: "TOGGLE_ITALIC", id: 0}); }, 6100);
// window.setTimeout(function(){store.dispatch({type: "TOGGLE_UNDERLINED", id: 0}); }, 6200);
//
// window.setTimeout(function(){store.dispatch({type: "TOGGLE_BOLD", id: 0}); }, 7000);
// window.setTimeout(function(){store.dispatch({type: "TOGGLE_ITALIC", id: 0}); }, 7100);
// window.setTimeout(function(){store.dispatch({type: "TOGGLE_UNDERLINED", id: 0}); }, 7200);
//
// window.setTimeout(function(){store.dispatch({type: "TOGGLE_ITALIC", id: 1}); }, 8000);
// window.setTimeout(function(){store.dispatch({type: "TOGGLE_UNDERLINED", id: 2}); }, 10000);
// window.setTimeout(function(){store.dispatch({type: "REMOVE_ITEM", id: 3}); }, 13000);
//
//
//
//
//
//
//
//
