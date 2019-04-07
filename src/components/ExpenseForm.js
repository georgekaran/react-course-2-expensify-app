import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createAt: props.expense ? moment(props.expense.createAt) : moment(),
            calendarFocused: false,
            error: false
        }
    }

    handleDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    handleNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    handleAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    handleDateChange = (createAt) => {
        if (createAt) {
            this.setState(() => ({ createAt }))
        }
    }

    handleFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused}))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: true }))
        } else {
            this.setState(() => ({ error: false }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createAt: this.state.createAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <h2>Plese provide description and amount</h2>}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                           placeholder="Description" 
                           value={this.state.description} 
                           onChange={this.handleDescriptionChange} 
                           autoFocus />
                    <input type="text" 
                           placeholder="Amount" 
                           value={this.state.amount}
                           onChange={this.handleAmountChange} />
                    <SingleDatePicker date={this.state.createAt} 
                                      onDateChange={this.handleDateChange} 
                                      focused={this.state.calendarFocused}
                                      onFocusChange={this.handleFocusChange}
                                      numberOfMonths={1}
                                      isOutsideRange={(day) => false} />
                    <textarea placeholder="Add a note for yout expense (optional)" 
                              value={this.state.note} 
                              onChange={this.handleNoteChange}>
                    </textarea>
                    <button >Add Expense</button>
                </form>
            </div>
        )
    }
}