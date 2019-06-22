import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import { connect } from 'react-redux'
import { fetchExpenses } from '../actions/expenses'

class ExpenseDashboardPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // axios.get(`${basePath}/expense`).then(response => {
        //     this.props.dispatch(fetchExpenses(response.data))
        // }).catch(error => {
        //     console.log(error);
        // });
    }

    render () { 
        return (
            <div>
                <ExpenseListFilters />
                <ExpenseList />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(ExpenseDashboardPage)