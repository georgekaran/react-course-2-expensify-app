// Alert Reducer
let alertReducerDefaultState = {
    message: '',
    type: '',
    isRender: false
}

const alertReducer = (state = alertReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_ALERT':
            return { ...action }
        default:
            return state
    }
}

export default alertReducer