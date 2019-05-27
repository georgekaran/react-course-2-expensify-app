import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import WelcomePage from "../components/WelcomePage";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import AuthService from "../service/AuthService";

const isAuthenticated = () => {
  let isAuthenticated =
    localStorage.getItem("expensify_session") != (undefined || null)
      ? true
      : false;
  console.log(isAuthenticated);
  return isAuthenticated;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={WelcomePage} exact />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
