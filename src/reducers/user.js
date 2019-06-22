// Users Reducer
let usersReducerDefaultState = {
    _id: 0,
    name: '',
    email: '',
    image: '',
    passwordResetToken: '',
    passwordResetExpires: '',
    createdAt: Date.now(),
    token: ''
}

const usersReducer = (state = usersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return { ...action.user }
        case 'REMOVE_USER':
            return state.users.filter(user => user.id != action.id)
        case 'EDIT_USER':
            return { ...state, ...action.updates }
        case 'FETCH_USER':
            return action.user
        default:
            return state
    }
}

export default usersReducer