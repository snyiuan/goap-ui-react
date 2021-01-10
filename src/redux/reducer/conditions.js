import {
    RECEIVECONDITIONS, REMOVECONDITION,
    ADDCONDITION, CHANGECONDITION,
} from '../actions/actions-types';
import { message } from 'antd';

const conditions = (state = [{ name: 'condition a', repeated: false }, { name: 'condition b', repeated: false }], action) => {
    switch (action.type) {
        case ADDCONDITION:
            if (state.find(val => val.name === action.name)) {
                message.info("Conditions are repeated!", 0.5)
                return state
            } else {
                return [...state, { name: action.name }]
            }
        case REMOVECONDITION:
            state.splice(action.index, 1);

            return [...state]

        case RECEIVECONDITIONS:
            return state;

        case CHANGECONDITION:
            //todo...
            if (state.find(val => val.name === action.name)) {
                state[action.index].repeated = true;
            } else {
                state[action.index].repeated = false;
            }
            state[action.index].name = action.name
            return [...state];

        default:
            return state;
    }
}

export default conditions;

