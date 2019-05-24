// ADD_EXPENSE
export const setAlert = ({ message = '', type = '', isRender = false } = {}) => ({
    type: 'SET_USER',
    alert: {
        message,
        type,
        isRender
    }
})