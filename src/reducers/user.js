// Users Reducer
let usersReducerDefaultState = {
    users: []
}

const usersReducer = (state = usersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state.users, action.user]
        case 'REMOVE_USER':
            return state.users.filter(user => user.id != action.id)
        case 'EDIT_USER':
            return state.users.map((user) => {
                if (user.id === action.id) {
                    return {
                        ...user, 
                        ...action.updates
                    }
                } else {
                    return user
                }
            })
        case 'FETCH_USER':
            return action.users
        default:
            return state
    }
}

export default usersReducer