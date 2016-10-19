import itemreducer   from "./item-reducer";
import headerreducer from "./header-reducer";
import Item          from "../components/item";

type StateType = {
    title: string,
    items: Array<Item>
};
let initstate: StateType = {
    title: "",
    items: []
};
export default function (state: StateType = initstate, action:any) {
    return {
        title: headerreducer(state.title, action),
        items: itemreducer(state.items, action)
    };
}