import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";
import back from "../../images/starts.jpg";

import { setHeaderVisible } from "../actions/header";

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(setHeaderVisible({ isVisible: false }));
  }

  componentWillUnmount() {
    this.props.dispatch(setHeaderVisible({ isVisible: true }));
  }

  render() {
    return (
      <React.Fragment>
        <img className="not-found-back" src={back} />
        <div>
          <span className="title-404">404!</span>
          <Link to="/">Go Home</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(NotFoundPage);
