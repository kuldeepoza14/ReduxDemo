import {USER_DATA} from "./action-types";



const initial={
    user:null
};
export const reducer = (state = initial, action) => {
    switch (action.type) {
        case USER_DATA:
                return Object.assign({}, state, {user: action.user});
                break;
        default:
            return state;
    }
};
