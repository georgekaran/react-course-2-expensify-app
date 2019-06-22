import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import usersReducer from '../reducers/user';
import alertReducer from '../reducers/alert'
import headerReducer from '../reducers/header'
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = {
    expenses: expensesReducer,
    filters: filtersReducer,
    user: usersReducer,
    alert: alertReducer,
    header: headerReducer,
}

const myPersistCombineReducers = persistCombineReducers(persistConfig, rootReducer)

let mid = [thunk];
const store = createStore(
    myPersistCombineReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...mid)
)

const persistor = persistStore(store)

export { store, persistor }