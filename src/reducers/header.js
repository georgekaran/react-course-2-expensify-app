// Header Reducer
let headerReducerDefaultState = {
    isVisible: true
}

const headerReducer = (state = headerReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_HEADER_VISIBLE':
            return { ...action.header }
        default:
            return state
    }
}

export default headerReducer