import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import AuthService from "../service/AuthService";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import BaseField from './util/BaseField'

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
    .required("Senha é obrigatório!")
    .default("")
});

const attemptRegister = async (values, actions) => {
  try {
    const user = await AuthService.register(values);
    console.log(user);
    //this.setState({ redirectToReferrer: true });
  } catch (e) {
    console.error("error trying to login", e);
  }
};

const initProfile = RegisterSchema.default();

const RegisterPage = ({ values, handleChange }) => (
  <div className="container">
    <Formik
      validationSchema={RegisterSchema}
      initialValues={initProfile}
      onSubmit={attemptRegister}
    >
      <Form>
        <div className="Register Form">
          <BaseField
            inputId="name"
            inputTitle="Nome"
            inputType="text"
            inputName="name"
          />
          <BaseField
            inputId="email"
            inputTitle="Email"
            inputType="text"
            inputName="email"
          />
          <BaseField
            inputId="password"
            inputTitle="Senha"
            inputType="password"
            inputName="password"
          />
          <button type="submit">Cadastrar</button>
        </div>
      </Form>
    </Formik>
  </div>
);

export default RegisterPage;
