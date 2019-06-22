// ADD_EXPENSE
export const addUser = ({ _id = '', name = '', email = '', image = '', token = '',
                        passwordResetToken = '', passwordResetExpires = undefined, createdAt = Date.now() } = {}) => ({
    type: 'ADD_USER',
    user: {
        _id,
        name,
        email,
        image,
        passwordResetToken,
        passwordResetExpires,
        createdAt,
        token
    }
})

export const fetchUser = (user = {}) => ({
    type: 'FETCH_USER',
    user
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