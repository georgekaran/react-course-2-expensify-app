import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import WelcomePage from "../components/WelcomePage";
import LoginPage from "../components/LoginPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import RegisterPage from "../components/RegisterPage";
import { isAuthenticated } from "../util/userUtil";
import Header from "../components/Header";

let authenticated = isAuthenticated();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const AppRoutes = props => (
  <BrowserRouter>
    <React.Fragment>
      <Header isAuthenticated={authenticated} />
      <div className="mt-75px">
        <Switch>
          <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
          <PrivateRoute path="/create" component={AddExpensePage} />
          <PrivateRoute path="/edit/:id" component={EditExpensePage} />
          <Route path="/" component={WelcomePage} exact />
          <Route path="/help" component={HelpPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </React.Fragment>
  </BrowserRouter>
);

export default AppRoutes;
