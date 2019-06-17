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
      <header className="menu-header bg-color-indigo">
        <nav className="nav-header">
          <div className="container">
            <img className="image-logo" src="https://d2k5nsl2zxldvw.cloudfront.net/images/icons/sign-in/expensify-logo--reverse.svg" alt="Expensify" />
          </div>
          <div style={loginStyle} className="container float-rigth">
            <ul className="menu-top-right ps-relative">
              <li className="margin-1rem">
                <NavLink to="/dashboard" activeClassName="is-active" exact>
                  <span className="span-header">Dashboard</span>
                </NavLink>
              </li>
              <li className="margin-1rem ps-relative">
                <NavLink to="/create" activeClassName="is-active">
                  <span className="span-header">Criação</span>
                </NavLink>
                <div></div>
              </li>
              <li className="margin-1rem ps-relative">
                <NavLink to="/help" activeClassName="is-active">
                  <span className="span-header">Ajuda</span>
                </NavLink>
              </li>
              <li className="margin-1rem ps-relative">
                <div className="profile-item">
                  <span className="span-header">Ajuda</span>
                </div>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-item">
                    <NavLink to="/profile">
                      <span className="profile-link span-header ta-left">Meu perfil</span>
                    </NavLink>
                  </div>
                  <div className="dropdown-menu-item">
                    <NavLink to="/help">
                      <span className="logout-link span-header ta-left">Sair</span>
                    </NavLink>
                  </div>
                </div>
              </li>
            </ul>
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
