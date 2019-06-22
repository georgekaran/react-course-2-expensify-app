import React from "react";
import axios from 'axios'
import { connect } from "react-redux";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import moment from "moment";

import Alert from "./util/Alert";
import FileField from "./util/FileField";
import UserService from '../service/UserService';
import { setAlert } from "../actions/alert";
import { setHeaderToken } from '../util/userUtil'
import { editUser } from '../actions/user'

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
    image: yup
        .mixed()
        .default(undefined),
    createdAt: yup
        .date()
});

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.user);
        this.initProfile = { ...this.props.user, createdAt: moment(this.props.user.createdAt).format('YYYY-MM-DD') };
        //axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.props.user.token;
    }

    updateProfilehandler = async values => {
        try {
            //UPLOAD PROFILE IMAGE
            let imageNameExt = "";
            let image = values.image;
            let imageFile = new FormData();
            let imageUpdated
            if (typeof image !== "string") {
                imageFile.set("image", image, image.name);
                imageUpdated = await UserService.updateImage(imageFile)
                console.log("Image updated: ", imageUpdated);
                if (imageUpdated.response && imageUpdated.response.status >= 400) {
                    this.props.dispatch(
                        setAlert({
                            message: user.response.data.error,
                            type: "a",
                            isRender: true
                        })
                    );
                    return;
                }
            }

            //UPDATE PROFILE
            let userUpdated = await UserService.update({ ...values, image: imageUpdated != undefined ? imageUpdated.image : image })
            this.props.dispatch(editUser(this.props.user._id, values))
            console.log("CHEOGU AQIIO")
        } catch (err) {
            console.warn(err);
        }
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
                    {({ errors, touched }) => (
                        <Form>
                            <div className="login-wrap">
                                <Alert />
                                {this.props.user.image &&
                                    <div className="img-profile-wrapper">
                                        <img className="img-profile-large" src={`http://127.0.0.1:3000/images/${this.props.user.image}`} />
                                    </div>
                                }
                                <div className="email-wrapper">
                                    <span className="span-login">Código</span>
                                    <Field
                                        className="input-profile"
                                        id="input-id"
                                        title="Código"
                                        type="text"
                                        name="_id"
                                        disabled
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
                                        component={FileField}
                                        name="image"
                                        type="file"
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
                                        disabled
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