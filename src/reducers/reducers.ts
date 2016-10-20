import itemreducer   from "./item-reducer";
import headerreducer from "./header-reducer";
import Item          from "../components/item";

type StateType = {
    headertext: string,
    items: Array<Item>
};
let initstate: StateType = {
    headertext: "",
    items: []
};
export default function (state: StateType = initstate, action:any) {
    return {
        headertext: headerreducer(state.headertext, action),
        items: itemreducer(state.items, action)
    };
}