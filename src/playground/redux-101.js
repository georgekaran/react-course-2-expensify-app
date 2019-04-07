import { createStore }  from 'redux'

// Action generators - functions that return actions objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
    type: 'INCREMENT', 
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({ 
    type: 'DECREMENT', 
    decrementBy
})

const resetCount = ({ resetTo = 0} = {}) => ({
    type: 'RESET',
    resetTo
})

const setCount = ({ setTo = 10} = {}) => ({
    type: 'SET',
    setTo
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change  state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.setTo
            }
        case 'RESET':
            return {
                count: action.resetTo
            }
        default:
            return state;
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }))

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

store.dispatch(incrementCount())

store.dispatch(resetCount({ resetTo: 2 }))

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 2 }))

store.dispatch(setCount({ setTo: 20 }))