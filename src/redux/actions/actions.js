import {
    RECEIVECONDITIONS, ADDCONDITION, CHANGECONDITION, REMOVECONDITION,
    ADDACTION, REMOVEACTION,
    ADDGOAL, REMOVEGOAL,
    ADDTASK, REMOVETASK,
    ADDPRECONDITION, ADDPOSTCONDITION,
} from './actions-types';



export const addCondition = (condition) => ({ type: ADDCONDITION, data: condition });
export const removeCondition = (index) => ({ type: REMOVECONDITION, data: index });
export const changeCondition = (index, value) => ({ type: CHANGECONDITION, index: index, value: value })

export const addTask = (name) => ({ type: ADDTASK, data: name })
export const removeTask = (index) => ({ type: REMOVETASK, data: index })

export const addAction = (name) => ({ type: ADDACTION, data: name })
export const removeAction = (index) => ({ type: REMOVEACTION, data: index })

const receiveConditions = (conditions) => ({ type: RECEIVECONDITIONS, data: conditions })

export const getConditions = () => {
    return dispatchEvent => {
        setTimeout(() => {
            const conditions = ['a', 'b', 'c', 'd', 'e', 'f'];
            dispatchEvent(receiveConditions(conditions))
        }, 1000);
    }
}

