import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo_imagem2.png";

const loginStyle = {
  marginLeft: "0"
};

const Header = props => {
  if (props.header.isVisible) {
    return (
      <header className="menu-header">
        <nav className="nav-header">
          <div className="container">
            <img className="image-logo" src="https://d2k5nsl2zxldvw.cloudfront.net/images/icons/sign-in/expensify-logo--reverse.svg" alt="Expensify" />
          </div>
          <div style={loginStyle} className="container float-rigth">
            <React.Fragment> 
              <NavLink className="btn-save" to="/login" exact>
                <span className="btn-text">Login</span>
              </NavLink>
              <NavLink className="btn-save" to="/register" exact>
                <span className="btn-text">Registre-se</span>
              </NavLink>
            </React.Fragment>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <React.Fragment />
    )
  }
};

const mapStateToProps = state => ({
  header: state.header
});

export default connect(mapStateToProps)(Header);
