import React, { Fragment } from "react";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Header from "../../modules/Main/Header/Header";
import screens from "../../screens";
import Loading from "./Loading";

const RegisterPage = Loadable({
  loader: () => import("../../modules/Auth/Register/RegisterPage"),
  loading: Loading
});

const LoginPage = Loadable({
  loader: () => import("../../modules/Auth/Login/LoginPage"),
  loading: Loading
});

const NewPasswordPage = Loadable({
  loader: () => import("../../modules/Auth/NewPassword/NewPasswordPage"),
  loading: Loading
});

const PasswordResetPage = Loadable({
  loader: () => import("../../modules/Auth/PasswordReset/PasswordResetPage"),
  loading: Loading
});

const screensComponents = screens.map(route => {
  const Component = Loadable({
    loader: route.getComponent,
    loading: Loading
  });
  console.log(route, route.getComponent);
  return route.getComponent ? (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      render={props => <Component {...props} />}
    />
  ) : null;
});

class WrapperComponent extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/new-password" exact component={NewPasswordPage} />
            <Route path="/reset-password" exact component={PasswordResetPage} />
            <Route>
              <Fragment>
                <Switch>{screensComponents}</Switch>
              </Fragment>
            </Route>
          </Switch>
      </div>
    );
  }
}
const mapState = state => ({
  currentUser: state.currentUser.currentUser,
});

export default connect(mapState)(WrapperComponent);
