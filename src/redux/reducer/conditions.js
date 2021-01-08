import { RECEIVECONDITIONS, REMOVECONDITION, ADDCONDITION, CHANGECONDITION } from '../actions/actions-types';
// state = ['a', 'b', 'c', 'd', 'e', 'f']

const conditions = (state = { conditions: [] }, action) => {
    console.log('store...', state);
    switch (action.type) {
        case ADDCONDITION:
            state.conditions.push(action.data)
            return state
        case REMOVECONDITION:
            return state.conditions.splice(action.data, 1);
        case RECEIVECONDITIONS:
            return state;
        case CHANGECONDITION:
            state.conditions.splice(action.index, 1, action.value)
            return state;
        default:
            return state;
    }
}

export default conditions;

