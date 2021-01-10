import {
    ADDGOAL, ADDTASK, REMOVEGOAL,
    REMOVETASK, CHANGEGOALCHECKED,
    REMOVETASKCONDITION
} from '../actions/actions-types';
import { message } from 'antd';


const tasks = (state = [{ name: 'task1', goalConditions: [] }], action) => {
    switch (action.type) {
        case ADDTASK:
            if (state.find((item) => item.name === action.name)) {
                message.info('Tasks are repeated!', 0.5)
                return state
            } else {
                return [
                    ...state,
                    { name: action.name, goalConditions: [] }
                ]
            }

        case REMOVETASK:
            state.splice(action.index, 1)
            message.success('Remove success!', 0.5)
            return [...state];

        case ADDGOAL:
            if (state[action.taskIndex].goalConditions.find((goal) => goal.index === action.targetIndex)) {
                message.info('Goals are repeated!', 0.5)
                return state
            } else {
                state[action.taskIndex].goalConditions.push({ index: action.targetIndex, checked: false })
                return [...state]
            }

        case CHANGEGOALCHECKED:

            state[action.taskIndex].goalConditions[action.targetIndex].checked = action.checked
            return [...state]
        case REMOVETASKCONDITION:
            state.forEach(val => {
                val.goalConditions.filter(goal => goal.index === action.index)
            })
            return [...state]

        case REMOVEGOAL:
            state[action.taskIndex].goalConditions.splice(action.targetIndex)
            return [...state]

        default:
            return state;
    }
}

export default tasks;