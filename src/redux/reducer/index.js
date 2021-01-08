import { combineReducers } from 'redux';
import conditions from './conditions';
import actions from './actions';
import tasks from './tasks';

export default combineReducers(
    {
        conditions,
        actions,
        tasks,
    }

)