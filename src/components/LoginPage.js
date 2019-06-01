import React from "react";
import { connect } from "react-redux";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import ButtonPrimary from "./ButtonPrimary";
import AuthService from "../service/AuthService";
import BaseField from "./util/BaseField";
import Alert from './util/Alert'
import { setAlert } from '../actions/alert'

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email não é válido!')
    .required("Email é obrigatório!")
    .default(""),
  password: yup
    .string()
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
      localStorage.setItem('expensify_session', user.token);
      if (user.status >= 400) {
          console.log(this.props)
          console.log({ message: user.response.data.error, type: 'a', isRender: true })
          this.props.dispatch(setAlert({ message: user.response.data.error, type: 'a', isRender: true }))
      }
    } catch (e) {
      console.error("error trying to login", e.response.data);
    }
  };

  render() {
    return (
      <div>
        <Alert />
        <Formik
          validationSchema={LoginSchema}
          initialValues={initProfile}
          onSubmit={this.attemptLogin}
          validate={LoginSchema}
        >
          <Form>
            <div className="login-wrap">
              <span className="login-title">Login</span>
              <div>
                <span className="span-login">Email</span>
                <Field className="input-login" id="input-email" title="Email" type="text" name="email" />
              </div>
              <BaseField
                inputId="password"
                inputTitle="Senha"
                inputType="password"
                inputName="password"
              />
              <button type="submit">Logar</button>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default connect()(LoginPage);
