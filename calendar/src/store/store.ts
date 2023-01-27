import { getInputStateReducer } from './reducers/getInputStateReducer';
import { getStateReducer } from './reducers/getStateReducer';
import {combineReducers, createStore} from "redux"
const rootReducer = combineReducers({getStateReducer, getInputStateReducer})
const store = createStore(rootReducer)
export default store
