import Item from "../components/item";

type StateType = Array<Item>;
let initialState: StateType = [];


export default function (state: StateType, action: any) {

    if (typeof state === "undefined") {
        return initialState;
    } else {

        switch (action.type) {
            case "ADD_ITEM": {
                return state.concat([action.payload]);
            }
            case "TOGGLE_BOLD":
                return state.map((item) => {
                    if (action.payload === item.id) {
                        // can't do
                        //
                        // return Object.assign({}, item, {isbold: !item.isbold});
                        //
                        // because I want to use the setter on 'item' in order to
                        // set .serialized as well
                        return item.clone().toggle("bold");
                    } else {
                        return item;
                    }
                });
            case "TOGGLE_ITALIC":
                return state.map((item) => {
                    if (action.payload === item.id) {
                        // see note under TOGGLE_BOLD
                        return item.clone().toggle("italic");
                    } else {
                        return item;
                    }
                });
            case "TOGGLE_UNDERLINED":
                return state.map((item) => {
                    if (action.payload === item.id) {
                        // see note under TOGGLE_BOLD
                        return item.clone().toggle("underlined");
                    } else {
                        return item;
                    }
                });
            default: {
                return state;
            }
        }
    }
}


