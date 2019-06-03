import React from "react";
import { connect } from "react-redux";

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>{this.props.alert.message}</h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(mapStateToProps)(Alert);
