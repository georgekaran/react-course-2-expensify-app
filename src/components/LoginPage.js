import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import ButtonPrimary from "./ButtonPrimary";
import AuthService from "../service/AuthService";
import BaseField from "./util/BaseField";
import Alert from "./util/Alert";
import { setAlert } from "../actions/alert";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email não é válido!")
    .required("Email é obrigatório!")
    .default(""),
  password: yup
    .string()
    .min(6, "Senha curta!")
    .max(50, "Senha muito longa!")
    .required("Senha é obrigatório!")
    .default("")
});

const initProfile = LoginSchema.default();

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  attemptLogin = async (values, actions) => {
    try {
      let user = await AuthService.login(values);
      if (user.response.status >= 400) {
        console.log(this.props);
        console.log({
          message: user.response.data.error,
          type: "a",
          isRender: true
        });
        this.props.dispatch(
          setAlert({
            message: user.response.data.error,
            type: "a",
            isRender: true
          })
        );
        console.log('passou')
      } else {
        localStorage.setItem("expensify_session", user.token);
      }
    } catch (e) {
      console.error("error trying to login", e.response.data);
    }
  };

  render() {
    return (
      <div>
        <Formik
          validationSchema={LoginSchema}
          initialValues={initProfile}
          onSubmit={this.attemptLogin}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="login-wrap">
                <span className="login-title">Login</span>
                <Alert />
                <div className="email-wrapper">
                  <span className="span-login">Email</span>
                  <Field
                    className="input-login"
                    id="input-email"
                    title="Email"
                    type="text"
                    name="email"
                    placeholder="Digite seu e-mail"
                  />
                  <span className="span-focus" />
                  {errors.email && touched.email ? (
                    <React.Fragment>
                      <span className="form-validation-error" />
                      <span className="form-validation-message">
                        {errors.email}
                      </span>
                    </React.Fragment>
                  ) : null}
                </div>
                <div className="email-wrapper">
                  <span className="span-login">Senha</span>
                  <Field
                    className="input-password"
                    id="input-password"
                    title="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                  />
                  <span className="span-focus" />
                  {errors.password && touched.password ? (
                    <React.Fragment>
                      <span className="form-validation-error" />
                      <span className="form-validation-message">
                        {errors.password}
                      </span>
                    </React.Fragment>
                  ) : null}
                </div>
                <div className="ta-right mb-30px">
                  <Link className="forgot-password" to="/password-recovery">
                    Esqueceu sua senha?
                  </Link>
                </div>
                <div className="ta-center mb-30px">
                  <button className="btn-login" type="submit">
                    Logar
                  </button>
                </div>
                <div className="ta-center">
                  <span>
                    Não possui conta ainda?{" "}
                    <Link className="sign-up-link" to="/register">
                      Registre-se aqui
                    </Link>
                  </span>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default connect()(LoginPage);
