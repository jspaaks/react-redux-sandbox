
type StateType = string;
let initstate: StateType = "";

export default function (state: StateType = initstate, action: any) {

    switch (action.type) {
        case "CHANGE_HEADER": {
            return action.text;
        }
        default: {
            return state;
        }
    }
}

