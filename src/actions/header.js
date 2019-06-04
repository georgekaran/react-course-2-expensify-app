export const setHeaderVisible = ({ isVisible = false } = {}) => ({
    type: 'SET_HEADER_VISIBLE',
    header: {
        isVisible
    }
})