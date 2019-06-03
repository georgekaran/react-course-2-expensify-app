import React from "react";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        404! - <Link to="/">Go Home</Link>
        <ReactSVG src="/images/not-found.svg" />
      </div>
    );
  }
}

export default NotFoundPage;
