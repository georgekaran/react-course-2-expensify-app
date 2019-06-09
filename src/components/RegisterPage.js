import React from "react";
import { Link } from "react-router-dom"
import ButtonPrimary from "./ButtonPrimary";
import AuthService from "../service/AuthService";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import BaseField from "./util/BaseField";
import Alert from "./util/Alert";

const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório!")
    .default(""),
  email: yup
    .string()
    .email("Email não é válido!")
    .required("Email é obrigatório!")
    .default(""),
  password: yup
    .string()
    .min(6, "Senha menor 6 caracteres")
    .required("Senha é obrigatório!")
    .default(""),
  confirmPassword: yup
    .string()
    .required("Confirme a sua senha")
    .oneOf([yup.ref('password'), null], "Senhas não são iguais")
});

const attemptRegister = async (values, actions) => {
  try {
    const user = await AuthService.register({ name, email, password } = values);
    //this.setState({ redirectToReferrer: true });
  } catch (e) {
    console.error("error trying to login", e);
  }
};

const initProfile = RegisterSchema.default();

const RegisterPage = ({ values, handleChange }) => (
  <div>
    <Formik
      validationSchema={RegisterSchema}
      initialValues={initProfile}
      onSubmit={attemptRegister}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="login-wrap">
            <span className="login-title">Registrar-se</span>
            <Alert />
            <div className="email-wrapper">
              <span className="span-login">Nome</span>
              <Field
                className="input-name"
                id="input-name"
                title="Nome"
                type="text"
                name="name"
                placeholder="Digite seu nome"
              />
              <span className="span-focus" />
              {errors.name && touched.name ? (
                <React.Fragment>
                  <span className="form-validation-error" />
                  <span className="form-validation-message">{errors.name}</span>
                </React.Fragment>
              ) : null}
            </div>
            <div className="email-wrapper">
              <span className="span-login">Email</span>
              <Field
                className="input-login"
                id="input-login"
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
                placeholder="Digite seu senha"
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
            <div className="email-wrapper">
              <span className="span-login">Confirme sua senha</span>
              <Field
                className="input-password"
                id="input-confirmPassword"
                title="Senha"
                type="password"
                name="confirmPassword"
                placeholder="Confirme sua senha"
              />
              <span className="span-focus" />
              {errors.confirmPassword && touched.confirmPassword ? (
                <React.Fragment>
                  <span className="form-validation-error" />
                  <span className="form-validation-message">
                    {errors.confirmPassword}
                  </span>
                </React.Fragment>
              ) : null}
            </div>
            <div className="ta-center mb-30px">
              <button className="btn-login" type="submit">
                Salvar
              </button>
            </div>
            <div className="ta-center">
              <span>
                Já possui conta?{" "}
                <Link className="sign-up-link" to="/login">
                  Faça o login aqui
                </Link>
              </span>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default RegisterPage;
