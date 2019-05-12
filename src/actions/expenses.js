

// ADD_EXPENSE
export const addExpense = ({ description = '', note = '', amount = 0, createat = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id,
        description,
        note,
        amount,
        createat
    }
})

export const fetchExpenses = (expenses = []) => ({
    type: 'FETCH_EXPENSES',
    expenses
})

// REMOVE_EXPENSE
export const removeExpense = ({ id = 1 } = {}) => ({
    type: 'REMOVE_EXPENSE', 
    id
})
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})