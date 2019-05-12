import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'
import axios from 'axios';

const basePath = 'http://127.0.0.1:3000'

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(expense) => {
            console.log(expense)
            axios.post(`${basePath}/expense`, { ...expense }).then(response => {
                console.log(response)
                props.dispatch(addExpense({ ...expense }))
                props.history.push('/')
            }).catch(error => {
                console.log(error);
            });
        }} />
    </div>
)

export default connect()(AddExpensePage)