import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calendarFocused: null
        }
    }

    handleFiltersText = (e) => {
        this.props.dispatch(setTextFilter(e.target.value))
    }

    handleFiltersBy = (e) => {
        if (e.target.value === 'date') {
            this.props.dispatch(sortByDate())
        } else if (e.target.value === 'amount') {
            this.props.dispatch(sortByAmount())
        }
    }

    handleDateChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    handleFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.handleFiltersText} />
                <select onChange={this.handleFiltersBy}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.handleDateChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.handleFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }

}
    

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)