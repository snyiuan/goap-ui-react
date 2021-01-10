import {
    ADDACTION, REMOVEACTION,
    CHANGECOST, CHANGEACTIONNAME,
    ADDPRECONDITION, REMOVEPRECONDITION,
    ADDPOSTCONDITION, REMOVEPOSTCONDITION,
    CHANGEPRECHECKED, CHANGEPOSTCHECKED,
    REMOVEACTIONCONDITION
} from '../actions/actions-types';
import { message } from 'antd';

const actions = (state =
    [{
        name: 'action1',
        cost: 0,
        preConditions: [],
        postConditions: []
    }],
    action) => {
    switch (action.type) {
        case ADDACTION:
            if (state.find((val) => val.name === action.name)) {
                message.info("actions are repeated!", 0.5)
                return state;
            } else {
                return [
                    ...state,
                    { name: action.name, cost: 0, preConditions: [], postConditions: [] }
                ];
            }
        case CHANGECOST:
            state[action.actionIndex].cost = action.value;
            return [...state]

        case ADDPRECONDITION:
            if (state[action.actionIndex].preConditions.find((val) => val.index === action.targetIndex)) {
                message.info("Preconditions are repeated!", 0.5)
                return state
            } else {
                state[action.actionIndex].preConditions.push({ index: action.targetIndex, checked: false });
                return [...state];
            }

        case REMOVEPRECONDITION:
            state[action.actionIndex].preConditions.splice(action.targetIndex, 1);
            return [...state];

        case ADDPOSTCONDITION:
            if (state[action.actionIndex].postConditions.find((val) => val.index === action.targetIndex)) {
                message.info("Postconditions are repeated!", 0.5)
                return state
            } else {
                state[action.actionIndex].postConditions.push({ index: action.targetIndex, checked: false });
                return [...state];
            }

        case REMOVEPOSTCONDITION:
            state[action.actionIndex].postConditions.splice(action.targetIndex, 1);
            return [...state];

        case REMOVEACTIONCONDITION:
            state.forEach(val => {
                val.preConditions.filter(v => v.index === action.index)
                val.postConditions.filter(v => v.index === action.index)
            })
            return [...state]

        case CHANGEACTIONNAME:
            state[action.actionIndex].name = action.name
            return [...state]

        case CHANGEPRECHECKED:
            state[action.actionIndex].preConditions[action.targetIndex].checked = action.checked
            return [...state]

        case CHANGEPOSTCHECKED:
            state[action.actionIndex].postConditions[action.targetIndex].checked = action.checked
            return [...state]

        case REMOVEACTION:
            state.splice(action.index, 1);
            return [...state]

        default:
            return state;
    }
}

export default actions;