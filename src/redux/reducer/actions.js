import { ADDACTION, REMOVEACTION } from '../actions/actions-types';
import { message } from 'antd';

const actions = (state =
    [{
        name: 'action1',
        preConditions: [],
        postConditions: []
    }],
    action) => {
    switch (action.type) {
        case ADDACTION:
            if (state.find((val) => val.name === action.data)) {
                message.info("actions are repeated!")
                return state;
            } else {
                return [
                    ...state,
                    { name: action.data, preConditions: [], postConditions: [] }
                ];
            }
        case REMOVEACTION:
            console.log('splice')
            return state.splice(action.index, 1);
        default:
            return state;
    }
}

export default actions;