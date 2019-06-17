import React from "react";
import { connect } from "react-redux";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import Alert from "./util/Alert";
import moment from "moment";

const ProfileSchema = yup.object().shape({
    _id: yup
        .string(),
    name: yup
        .string()
        .required("Nome é obrigatório!"),
    email: yup
        .string()
        .email("Email não é válido!")
        .required("Email é obrigatório!"),
    //image: yup
        //.object(),
        //.test('fileSize', "Arquivo maior de 2mb", value => value.size <= FILE_SIZE)
        //.test('fileType', "Formato não suportado", value => SUPPORTED_FORMATS.includes(value.type)),
    createdAt: yup
        .date()
});

const FILE_SIZE = 2000000;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

class UserProfile extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props.user)
        let values = { email, name, _id, createdAt } = this.props.user;
        this.initProfile =  { email, name, _id, createdAt: moment(this.props.user.createdAt).format('YYYY-MM-DD') }
    }

    updateProfilehandler = async values => {
        console.log(values)
    }

    render() {
        return (
            <div>
                <h1>Meu Perfil</h1>
                <Formik
                    validationSchema={ProfileSchema}
                    initialValues={this.initProfile}
                    onSubmit={this.updateProfilehandler}
                >
                    {({ errors, touched, setFieldValue }) => (
                        <Form>
                            <div className="login-wrap">
                                <Alert />
                                <div className="email-wrapper">
                                    <span className="span-login">Código</span>
                                    <Field
                                        className="input-profile"
                                        id="input-id"
                                        title="Código"
                                        type="text"
                                        name="_id"
                                    />
                                    <span className="focus-profile" />
                                    {errors._id && touched._id ? (
                                        <React.Fragment>
                                            <span className="form-validation-error" />
                                            <span className="form-validation-message">
                                                {errors._id}
                                            </span>
                                        </React.Fragment>
                                    ) : null}
                                </div>
                                <div className="email-wrapper">
                                    <span className="span-name">Nome</span>
                                    <Field
                                        className="input-profile"
                                        id="input-name"
                                        title="Nome"
                                        type="text"
                                        name="name"
                                    />
                                    <span className="focus-profile" />
                                    {errors.name && touched.name ? (
                                        <React.Fragment>
                                            <span className="form-validation-error" />
                                            <span className="form-validation-message">
                                                {errors.name}
                                            </span>
                                        </React.Fragment>
                                    ) : null}
                                </div>
                                <div className="email-wrapper">
                                    <span className="span-login">Email</span>
                                    <Field
                                        className="input-profile"
                                        id="input-email"
                                        title="Email"
                                        type="text"
                                        name="email"
                                    />
                                    <span className="focus-profile" />
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
                                    <span className="span-login">Imagem de perfil</span>
                                    <Field
                                        className="input-profile"
                                        id="input-image"
                                        title="Imagem de perfil"
                                        type="file"
                                        name="image"
                                        onChange={(event) => {
                                            setFieldValue("image", event.currentTarget.files[0]);
                                        }}
                                    />
                                    <span className="focus-profile" />
                                    {errors.image && touched.image ? (
                                        <React.Fragment>
                                            <span className="form-validation-error" />
                                            <span className="form-validation-message">
                                                {errors.image}
                                            </span>
                                        </React.Fragment>
                                    ) : null}
                                </div>
                                <div className="email-wrapper">
                                    <span className="span-login">Membro desde</span>
                                    <Field
                                        className="input-profile"
                                        id="input-createdAt"
                                        title="Membro desde"
                                        type="date"
                                        name="createdAt"
                                    />
                                    <span className="focus-profile" />
                                    {errors.createdAt && touched.createdAt ? (
                                        <React.Fragment>
                                            <span className="form-validation-error" />
                                            <span className="form-validation-message">
                                                {errors.createdAt}
                                            </span>
                                        </React.Fragment>
                                    ) : null}
                                </div>
                                <div>
                                    <button className="btn-login" type="submit">
                                        Atualizar dados
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserProfile)