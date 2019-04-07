import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {

    const hanldeRemoveExpense = (e) => {
        props.dispatch(removeExpense({ id: props.expense.id }))
        props.history.push('/')
    }

    const handleEditExpense = (expense) => {
        props.dispatch(editExpense(props.expense.id, expense))
        props.history.push('/')
    }

    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={handleEditExpense} />
            <button onClick={hanldeRemoveExpense}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage)