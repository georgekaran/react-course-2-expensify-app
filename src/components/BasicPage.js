import React from 'react'
import { connect } from 'react-redux'
import AppRoutes from '../routers/AppRoutes'

const BasicPage = props => {
    return (
        <div className={props.user._id != 0 ? "bg-image-default body-container" : "bg-image-welcome body-container"}>
            <AppRoutes />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }

export default connect(mapStateToProps)(BasicPage)