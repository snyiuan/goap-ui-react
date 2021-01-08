import { ADDTASK, REMOVETASK } from '../actions/actions-types';

const tasks = (state = [{ name: 'task1', goalConditions: [] }], action) => {
    switch (action.type) {
        case ADDTASK:
            return [
                ...state,
                { name: action.data, goalConditions: [] }
            ]
        case REMOVETASK:
            return state.splice(action.index, 1);
        default:
            return state;
    }
}

export default tasks;