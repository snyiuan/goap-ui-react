import {
    RECEIVECONDITIONS, ADDCONDITION, CHANGECONDITION, REMOVECONDITION,
    ADDACTION, REMOVEACTION,
    ADDGOAL, REMOVEGOAL, CHANGEGOALCHECKED,
    ADDTASK, REMOVETASK, SETMAINTASK,
    CHANGECOST, CHANGEACTIONNAME, CHANGEPRECHECKED, CHANGEPOSTCHECKED,
    ADDPRECONDITION, REMOVEPRECONDITION, ADDPOSTCONDITION, REMOVEPOSTCONDITION,
    REMOVETASKCONDITION, REMOVEACTIONCONDITION, ADDWORLDSTATE, REMOVEWORLDSTATE, CHANGEWORLDSTATE,
} from './actions-types';



export const addCondition = (name) => ({ type: ADDCONDITION, name });
export const removeCondition = (index) => ({ type: REMOVECONDITION, index });
export const changeCondition = (index, name) => ({ type: CHANGECONDITION, index, name })

export const addGoal = (taskIndex, targetIndex) => ({ type: ADDGOAL, taskIndex, targetIndex })
export const removeGoal = (taskIndex, targetIndex) => ({ type: REMOVEGOAL, taskIndex, targetIndex })
export const changeGoalChecked = (taskIndex, targetIndex, checked) => ({ type: CHANGEGOALCHECKED, taskIndex, targetIndex, checked })




export const addTask = (name) => ({ type: ADDTASK, name })
export const removeTask = (index) => ({ type: REMOVETASK, data: index })
export const setMainTask = (taskIndex, checked) => ({ type: SETMAINTASK, taskIndex, checked })
export const removeTaskCondition = (index) => ({ type: REMOVETASKCONDITION, index })

export const addAction = (name) => ({ type: ADDACTION, name })
export const removeActionCondition = (index) => ({ type: REMOVEACTIONCONDITION, index })
export const addPreCondition = (actionIndex, targetIndex) => ({ type: ADDPRECONDITION, actionIndex, targetIndex })
export const removePreCondition = (actionIndex, targetIndex) => ({ type: REMOVEPRECONDITION, actionIndex, targetIndex })
export const changePreChecked = (actionIndex, targetIndex, checked) => ({ type: CHANGEPRECHECKED, actionIndex, targetIndex, checked })
export const changePostChecked = (actionIndex, targetIndex, checked) => ({ type: CHANGEPOSTCHECKED, actionIndex, targetIndex, checked })
export const addPostCondition = (actionIndex, targetIndex) => ({ type: ADDPOSTCONDITION, actionIndex, targetIndex })
export const removePostCondition = (actionIndex, targetIndex) => ({ type: REMOVEPOSTCONDITION, actionIndex, targetIndex })
export const changeCost = (actionIndex, value) => ({ type: CHANGECOST, actionIndex, value })
export const changeActionName = (actionIndex, name) => ({ type: CHANGEACTIONNAME, actionIndex, name })
export const removeAction = (index) => ({ type: REMOVEACTION, index })


export const addWorldState = (index) => ({ type: ADDWORLDSTATE, index })
export const removeWorldState = (index) => ({ type: REMOVEWORLDSTATE, index })
export const changeWorldState = (index, checked) => ({ type: CHANGEWORLDSTATE, index, checked })

const receiveConditions = (conditions) => ({ type: RECEIVECONDITIONS, data: conditions })

export const getConditions = () => {
    return dispatchEvent => {
        setTimeout(() => {
            const conditions = ['a', 'b', 'c', 'd', 'e', 'f'];
            dispatchEvent(receiveConditions(conditions))
        }, 1000);
    }
}

