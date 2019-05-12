import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'
import { fetchExpenses } from '../actions/expenses'
import axios from 'axios'

const basePath = 'http://127.0.0.1:3000'

class EditExpensePage extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios.get(`${basePath}/expense`).then(response => {
            this.props.dispatch(fetchExpenses(response.data))
        }).catch(error => {
            console.log(error);
        });
    }

    hanldeRemoveExpense = (e) => {
        this.props.dispatch(removeExpense({ id: this.props.expense.id }))
        this.props.history.push('/')
    }

    handleEditExpense = (expense) => {
        this.props.dispatch(editExpense(this.props.expense.id, expense))
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.handleEditExpense} />
                <button onClick={this.hanldeRemoveExpense}>Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => {
        return expense.id == props.match.params.id
    })
})

export default connect(mapStateToProps)(EditExpensePage)