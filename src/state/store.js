import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './ducks'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers(reducers)
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
