import { createStore } from 'redux';
import rooteReducer from './reducer/index';


// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    rooteReducer,
    // composeWithDevTools(applyMiddleware(thunk))
)

export default store;