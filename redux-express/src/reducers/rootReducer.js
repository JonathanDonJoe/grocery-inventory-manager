// This is the root reducer

// 1. Get a method from redux called 'combineReducers'
import { combineReducers } from 'redux';

// 2. Get each individual reducer
// The store is managed by the root reducer
// The manager needs individual departments (reducers)
import frozenReducer from './frozenReducer';
import dairyReducer from './dairyReducer';
import meatReducer from './meatReducer';

// 3. Call combineReducers and hand it an object.  Each key in the object will be a piece of state in the redux Store.  Each value will be the value of that piece of state in the redux store

const rootReducer = combineReducers({
    frozen: frozenReducer,
    dairy: dairyReducer,
    meat: meatReducer
})

export default rootReducer;