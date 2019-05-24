// ADD_EXPENSE
export const addUser = ({ _id = '', name = '', email = '', 
                        passwordResetToken = '', passwordResetExpires = undefined, createAt = Date.now() } = {}) => ({
    type: 'ADD_USER',
    user: {
        _id,
        name,
        email,
        password,
        passwordResetToken,
        passwordResetExpires,
        createAt
    }
})

export const fetchUser = (users = []) => ({
    type: 'FETCH_USER',
    users
})

// REMOVE_EXPENSE
export const removeUser = ({ id = 1 } = {}) => ({
    type: 'REMOVE_USER', 
    id
})
// EDIT_EXPENSE
export const editUser = (id, updates) => ({
    type: 'EDIT_USER',
    id,
    updates
})