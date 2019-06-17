import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import WelcomePage from "../components/WelcomePage";
import LoginPage from "../components/LoginPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import RegisterPage from "../components/RegisterPage";
import Header from "../components/Header";
import HeaderHome from "../components/HeaderHome";
import UserProfile from "../components/UserProfile";

const HeaderDefault = () => {
  if (!isAuth) {
    return <Header />
  }
  return <HeaderHome />
}

let isAuth = false;

class AppRoutes extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    isAuth = this.props.user._id != 0;
    return (
      <BrowserRouter>
        <React.Fragment>
          <HeaderDefault />
          <div className="mt-75px hg-80vh">
            <Switch>
              <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} isAuth={isAuth} />
              <PrivateRoute path="/create" component={AddExpensePage} isAuth={isAuth} />
              <PrivateRoute path="/edit/:id" component={EditExpensePage} isAuth={isAuth} />
              <PrivateRoute path="/profile" component={UserProfile} isAuth={isAuth} />
              <PublicRoute path="/" component={WelcomePage} exact isAuth={isAuth} />
              <PublicRoute path="/help" component={HelpPage} isAuth={isAuth} />
              <PublicRoute path="/login" component={LoginPage} isAuth={isAuth} />
              <PublicRoute path="/register" component={RegisterPage} isAuth={isAuth} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AppRoutes);
