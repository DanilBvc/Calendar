import { saveEvents } from './middleware/saveEvents';
import { getInputStateReducer } from './reducers/getInputStateReducer';
import { getStateReducer } from './reducers/getStateReducer';
import {applyMiddleware, combineReducers, createStore} from "redux"
const rootReducer = combineReducers({getStateReducer, getInputStateReducer})
const store = createStore(rootReducer, applyMiddleware(saveEvents))
export default store
