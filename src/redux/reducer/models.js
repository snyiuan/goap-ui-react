import {
    RECEIVECONDITIONS, REMOVECONDITION,
    ADDCONDITION, CHANGECONDITION,
    ADDGOAL, ADDTASK, REMOVEGOAL,
    REMOVETASK, CHANGEGOALCHECKED,
    REMOVETASKCONDITION,
    ADDACTION, REMOVEACTION,
    CHANGECOST, CHANGEACTIONNAME,
    ADDPRECONDITION, REMOVEPRECONDITION,
    ADDPOSTCONDITION, REMOVEPOSTCONDITION,
    CHANGEPRECHECKED, CHANGEPOSTCHECKED,
    REMOVEACTIONCONDITION,
    ADDWORLDSTATE, REMOVEWORLDSTATE, CHANGEWORLDSTATE, SETMAINTASK,
    GENERATERESULTS,
    RENAMECONDITION

} from '../actions/actions-types';
import { message } from 'antd';
import { Action, State, plan_ui } from '../../generate/kgoap.esm.js';
/* const initState = {
    conditions:
        [{ name: 'condition a', repeated: false }, { name: 'condition b', repeated: false }],
    actions:
        [{
            name: 'action1', cost: 0,
            preConditions: [{ index: action.targetIndex, checked: false }],
            postConditions: [{ index: action.targetIndex, checked: false }]
        }],
    tasks:
        [{
            name: 'task1',
            goalConditions: [{ index: action.targetIndex, checked: false }]
        }]
} */

const models = (state = {
    conditions:
        [{ name: 'condition a', repeated: false }, { name: 'condition b', repeated: false }],
    actions:
        [{ name: 'action1', cost: 0, preConditions: [], postConditions: [] }],
    tasks:
        [{ name: 'task1', main: false, goalConditions: [] }],
    worldStates: [],
    results: []
    // results: [['act1', [['cond1', false], ['cond2', true]]], ['act2', [['cond2-1', true], ['cond2-2', false]]]]
}, action) => {
    let { conditions, actions, tasks, worldStates } = state;
    switch (action.type) {
        case ADDCONDITION:
            if (conditions.find(val => val.name === action.name)) {
                message.info("Conditions are repeated!", 0.5)
                return state
            } else {
                conditions.push({ name: action.name })
                return { ...state, conditions: [...conditions] }
            }
        case REMOVECONDITION:
            actions.forEach(item => {
                for (let i = 0; i < item.preConditions.length; i++) {
                    if (item.preConditions[i].index === action.index) {
                        item.preConditions.splice(i, 1);
                        i--;
                    } else if (item.preConditions[i].index > action.index) {
                        item.preConditions[i].index--;
                    }
                }
                for (let i = 0; i < item.postConditions.length; i++) {
                    if (item.postConditions[i].index === action.index) {
                        item.postConditions.splice(i, 1);
                        i--;
                    } else if (item.postConditions[i].index > action.index) {
                        item.postConditions[i].index--;
                    }
                }
            })
            tasks.forEach(task => {
                for (let i = 0; i < task.goalConditions.length; i++) {
                    if (task.goalConditions[i].index === action.index) {
                        task.goalConditions.splice(i, 1);
                        i--;
                    } else if (task.goalConditions[i].index > action.index) {
                        task.goalConditions[i].index--;
                    }
                }
            })
            conditions.splice(action.index, 1);
            // return { ...state}
            return { conditions: [...conditions], actions: [...actions], tasks: [...tasks] }

        case RECEIVECONDITIONS:
            return state;

        case CHANGECONDITION:
            //todo...
            if (conditions.find(val => val.name === action.name)) {
                conditions[action.index].repeated = true;
            } else {
                conditions[action.index].repeated = false;
            }
            conditions[action.index].name = action.name
            return { ...state, conditions: [...conditions] };

        case RENAMECONDITION:
            if (conditions.find(val => val.name === action.name)) {
                message.info('Conditions are repeated!!!')
                return state;
            } else {
                conditions[action.index].name = action.name;
            }
            return { ...state, conditions: [...conditions] }

        //tasks

        case ADDTASK:
            if (tasks.find((item) => item.name === action.name)) {
                message.info('Tasks are repeated!', 0.5)
                return state
            } else {
                tasks.push({ name: action.name, main: false, goalConditions: [] })
                return { ...state, tasks: [...tasks] }
            }

        case REMOVETASK:
            tasks.splice(action.index, 1)
            message.success('Remove success!', 0.5)
            return { ...state, tasks: [...tasks] };
        case SETMAINTASK:
            if (action.checked) {
                tasks.forEach(task => {
                    task.main = false;
                })
            }
            tasks[action.taskIndex].main = action.checked;
            return { ...state, tasks: [...tasks] }
        case ADDGOAL:
            if (tasks[action.taskIndex].goalConditions.find((goal) => goal.index === action.targetIndex)) {
                message.info('Goals are repeated!', 0.5)
                return state
            } else {
                tasks[action.taskIndex].goalConditions.push({ index: action.targetIndex, checked: false })
                tasks[action.taskIndex].goalConditions.sort((o, n) => o.index - n.index);
                return { ...state, tasks: [...tasks] }
            }

        case CHANGEGOALCHECKED:
            tasks[action.taskIndex].goalConditions[action.targetIndex].checked = action.checked
            return { ...state, tasks: [...tasks] }

        case REMOVETASKCONDITION:
            tasks.forEach(val => {
                val.goalConditions.filter(goal => goal.index === action.index)
            })
            return { ...state, tasks: [...tasks] }

        case REMOVEGOAL:
            tasks[action.taskIndex].goalConditions.splice(action.targetIndex)
            return { ...state, tasks: [...tasks] }

        //actions

        case ADDACTION:
            if (actions.find((val) => val.name === action.name)) {
                message.info("actions are repeated!", 0.5)
                return state;
            } else {
                actions.push({ name: action.name, cost: 0, preConditions: [], postConditions: [] })
                return { ...state, actions: [...actions] };
            }
        case CHANGECOST:
            actions[action.actionIndex].cost = action.value;
            return { ...state, actions: [...actions] }

        case ADDPRECONDITION:
            if (actions[action.actionIndex].preConditions.find((val) => val.index === action.targetIndex)) {
                message.info("Preconditions are repeated!", 0.5)
                return state
            } else {
                actions[action.actionIndex].preConditions.push({ index: action.targetIndex, checked: false });
                actions[action.actionIndex].preConditions.sort((o, n) => o.index - n.index);
                return { ...state, actions: [...actions] };
            }

        case REMOVEPRECONDITION:
            actions[action.actionIndex].preConditions.splice(action.targetIndex, 1);
            return { ...state, actions: [...actions] };

        case ADDPOSTCONDITION:
            if (actions[action.actionIndex].postConditions.find((val) => val.index === action.targetIndex)) {
                message.info("Postconditions are repeated!", 0.5)
                return state
            } else {
                actions[action.actionIndex].postConditions.push({ index: action.targetIndex, checked: false });
                actions[action.actionIndex].postConditions.sort((o, n) => o.index - n.index);
                return { ...state, actions: [...actions] };
            }

        case REMOVEPOSTCONDITION:
            actions[action.actionIndex].postConditions.splice(action.targetIndex, 1);
            return { ...state, actions: [...actions] };

        case REMOVEACTIONCONDITION:
            actions.forEach(val => {
                val.preConditions.filter(v => v.index === action.index)
                val.postConditions.filter(v => v.index === action.index)
            })
            return { ...state, actions: [...actions] }

        case CHANGEACTIONNAME:
            actions[action.actionIndex].name = action.name
            return { ...state, actions: [...actions] }

        case CHANGEPRECHECKED:
            actions[action.actionIndex].preConditions[action.targetIndex].checked = action.checked
            return { ...state, actions: [...actions] }

        case CHANGEPOSTCHECKED:
            actions[action.actionIndex].postConditions[action.targetIndex].checked = action.checked
            return { ...state, actions: [...actions] }

        case REMOVEACTION:
            actions.splice(action.index, 1);
            return { ...state, actions: [...actions] }

        case ADDWORLDSTATE:
            if (worldStates.find(val => val.index === action.index)) {
                message.info('world states are repeated!')
                return state;
            } else {
                worldStates.push({ index: action.index, checked: false })
                worldStates.sort((o, n) => o.index - n.index)
                return { ...state, worldStates: [...worldStates] }
            }
        case REMOVEWORLDSTATE:
            worldStates.splice(action.index, 1)
            return { ...state, worldStates: [...worldStates] }
        case CHANGEWORLDSTATE:
            worldStates[action.index].checked = action.checked;
            return { ...state, worldStates: [...worldStates] }
        case GENERATERESULTS:
            // const { worldStates, conditions, tasks, stateActions } = state
            let initial_state = new State();
            let goal_state = new State();
            let allowed_actions = [];
            worldStates.forEach(val => {
                initial_state.set(conditions[val.index].name, val.checked)
            })

            tasks.forEach(task => {
                if (task.main) {
                    task.goalConditions.forEach(val => {
                        goal_state.set(conditions[val.index].name, val.checked)
                    })
                }
            })
            if (goal_state.size === 0) {
                message.info('Please select a main tasks', 1)
            }
            actions.forEach(v => {
                let pre_conditions = new State();
                let post_conditions = new State();
                v.preConditions.forEach(pre => {
                    pre_conditions.set(conditions[pre.index].name, pre.checked);
                })
                v.postConditions.forEach(post => {
                    post_conditions.set(conditions[post.index].name, post.checked);
                })
                allowed_actions.push(new Action(v.name, v.cost, pre_conditions, post_conditions));
            })
            return { ...state, results: [...plan_ui(initial_state, goal_state, allowed_actions)] }
        default:
            return state;
    }
}

export default models;

