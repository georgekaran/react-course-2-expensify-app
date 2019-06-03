// ADD_EXPENSE
export const setAlert = ({ message = '', type = '', isRender = false } = {}) => ({
    type: 'SET_ALERT',
    alert: {
        message,
        type,
        isRender
    }
})