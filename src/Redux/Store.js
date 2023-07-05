import {applyMiddleware, createStore} from 'redux';
import { reducer } from './CombineReducer';
import thunk from 'redux-thunk';
const initialState = {};
export const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk),
)