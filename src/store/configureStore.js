import { createStore, combineReducers, applyMiddleware } from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import usersReducer from '../reducers/user';
import alertReducer from '../reducers/alert'
import headerReducer from '../reducers/header'
import thunk from "redux-thunk";

export default () => {
    let mid = [thunk];
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            user: usersReducer,
            alert: alertReducer,
            header: headerReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(...mid)
    )
    return store
}
