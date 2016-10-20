
type StateType = string;
let initstate: StateType = "";

export default function (state: StateType = initstate, action: any) {

    switch (action.type) {
        case "CHANGE_HEADERTEXT": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

