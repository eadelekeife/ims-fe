import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Divider, Input, Spin, notification } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { Link, useSearchParams } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginUser } from "../../utils/reducers/auth";

import Nav from "../../components/nav";
import Footer from "../../components/footer";
import AllAppRoutes from "../../utils/routes";

const LoginPage = props => {

    const [loadingData, setLoadingData] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [authred] = useSearchParams();
    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />;
    const validator = yup.object().shape({
        emailAddress: yup.string().email('Email is not valid').required('Email field can not be empty'),
        password: yup.string().min(6).required('Password field can not be empty')
    })

    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValue: {
            emailAddress: "",
            password: "",
        },
        resolver: yupResolver(validator)
    });
    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description: message
        });
    };
    const spinnerIcon = <LoadingOutlined style={{ fontSize: 40, color: '#fff' }} spin />;
    const [submittingForm, setSubmittingForm] = useState(false);

    useEffect(() => {
        let redirectLink = authred.get('auth_redirect');
        // if (props.auth.isAuthenticated) {
        //     if (redirectLink) {
        //         window.location = redirectLink;
        //     } else window.location = "/dash";
        // }
        if (props.loginError.loginError.length) {
            setErrorMessage(props.loginError.loginError);
            setLoadingData(false);
        }
    }, [props.auth, props.loginError]);

    const logUserIn = e => {
        setLoadingData(true);
        setErrorMessage('');
        let { emailAddress, password } = e;
        props.loginUser({
            emailAddress, password
        });
    }

    return (
        <div className="form-page">
            {/* <Nav /> */}
            <div>
                <div className="login-header">
                    <h2>Isador Model Schools</h2>
                </div>
            </div>
            <div className="form-page-grid">
                <div className="text-block">
                    <div className="form-page-detail">
                        <div className="center">
                            <h4>Welcome!</h4>
                            <p>Login into your student dashboard</p>
                        </div>
                        {
                            errorMessage ?
                                <p className="errorMessage">{errorMessage}</p> : ''
                        }
                        <form onSubmit={handleSubmit(logUserIn)}>
                            <div className="form-group">
                                <label htmlFor="emailAddress">Email address</label>
                                <Controller name="emailAddress" control={control}
                                    render={({ field }) => (
                                        <Input {...field} type="email" name="emailAddress" id="emailAddress" />
                                    )} />
                                {errors.emailAddress && <p className="errorMessage">{errors.emailAddress.message}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Controller name="password" control={control}
                                    render={({ field }) => (
                                        <Input.Password {...field} type="email" name="password" id="password" />
                                    )} />
                                {errors.password && <p className="errorMessage">{errors.password.message}</p>}
                            </div>
                            <div>
                                {
                                    !submittingForm ?
                                        <div>
                                            <button className="btn-purple">Sign In</button>
                                        </div> :
                                        <div>
                                            <button className="btn-purple"><Spin indicator={spinnerIcon} /></button>
                                        </div>
                                }
                                <div className="pheripheral-buttons">
                                    {/* <p></p> */}
                                    <Link className="forgot" to={AllAppRoutes.contact_us}>Forgot your Password?</Link>
                                    <p>Don't have an IMS account? <Link className="forgot" to={AllAppRoutes.contact_us}>Forgot your Password?</Link></p>
                                </div>
                                {/* <Divider>or</Divider> */}
                                {/* <Link className="block-link" to="/">Login with Google</Link> */}
                                {/* <Link to="/" className="extra-link">Don't have any account? <span>Contact Support</span></Link> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="mobile-only">
                <Footer />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { auth: state.auth, loginError: state.loginError }
}


export default connect(mapStateToProps, { loginUser })(LoginPage)