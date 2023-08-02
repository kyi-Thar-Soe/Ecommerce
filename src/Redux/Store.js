import {applyMiddleware, createStore} from 'redux';
import {persistStore,persistReducer} from 'redux-persist';
import {reducer} from './CombineReducer';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key : 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig,reducer);
export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk),
)
export const persistor = persistStore(store);