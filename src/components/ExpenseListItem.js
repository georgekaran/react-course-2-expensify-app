import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createat }) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{amount} - {createat}</p>
    </div>
)

export default ExpenseListItem

