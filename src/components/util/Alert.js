import React from 'react'
import { connect } from 'react-redux'

const Alert = (props) => (
    <div>
        <h4>{props.alert.message}</h4>
    </div>
)

const mapStateToProps = (state) => {
    return {
        alert: state.alert
    }
}

export default connect(mapStateToProps)(Alert)