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
            {props.isAuthenticated && (
              <ul className="menu-top-right" render={props.isAuthenticated}>
                <li className="margin-1rem">
                  <NavLink
                    className=""
                    to="/"
                    activeClassName="is-active"
                    exact
                  >
                    <span className="span-header">Home</span>
                  </NavLink>
                </li>
                <li className="margin-1rem">
                  <NavLink to="/dashboard" activeClassName="is-active" exact>
                    <span className="span-header">Dashboard</span>
                  </NavLink>
                </li>
                <li className="margin-1rem">
                  <NavLink to="/create" activeClassName="is-active">
                    <span className="span-header">Criação</span>
                  </NavLink>
                </li>
                <li className="margin-1rem">
                  <NavLink to="/help" activeClassName="is-active">
                    <span className="span-header">Ajuda</span>
                  </NavLink>
                </li>
              </ul>
            )}
            <NavLink className="btn-save" to="/login" exact>
              <span className="btn-text">Login</span>
            </NavLink>
            <NavLink className="btn-save" to="/register" exact>
              <span className="btn-text">Registre-se</span>
            </NavLink>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <React.Fragment>
        
      </React.Fragment>
    )
  }
};

const mapStateToProps = state => ({
  header: state.header
});

export default connect(mapStateToProps)(Header);
