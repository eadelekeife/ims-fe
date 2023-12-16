import React, { useState } from "react";

import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Input, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Footer from "../components/footer";
import Nav from "../components/nav";

const SignInPage = () => {

    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#000' }} spin />;

    const signupValidator = yup.object().shape({
        emailAddress: yup.string().email('Please enter a valid email address').required('Please enter your email address'),
        password: yup.string().required('Please enter your password'),
    })

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(signupValidator)
    });

    const [loadingData, setLoadingData] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const signUpUser = () => { }

    return (
        <div>
            <div className="lane-blue">
                <p>Abihome is now Gradoo: Learn all about our name change and our new app in the blog post</p>
            </div>
            <Nav />
            <div>
                <div>
                    <div>
                        <div className="width-60 center">
                            {
                                errorMessage ?
                                    <p className="errorMessage">{errorMessage}</p> : ''
                            }
                            <form onSubmit={handleSubmit(signUpUser)}>
                                <div className="form_group">
                                    <label htmlFor="emailAddress">Email address</label>
                                    <Controller name="emailAddress" control={control}
                                        render={({ field }) => {
                                            return (
                                                <Input style={{ height: '5rem' }} type="email" {...field}
                                                    name="emailAddress" />
                                            )
                                        }} />
                                    {errors.emailAddress && <p className="errorMessage">{errors.emailAddress.message}</p>}
                                </div>
                                <div className="form_group">
                                    <label htmlFor="password">Password</label>
                                    <Controller name="password" control={control}
                                        render={({ field }) => {
                                            return (
                                                <Input type="password" style={{ height: '5rem' }} {...field}
                                                    name="password" />
                                            )
                                        }} />
                                    {errors.password && <p className="errorMessage">{errors.password.message}</p>}
                                </div>
                                <div style={{ display: 'block', marginBottom: 0 }}>
                                    {
                                        loadingData
                                            ?
                                            <button className="btn-yellow full_width">
                                                <Spin indicator={antIcon} /></button>
                                            :
                                            <button className="btn-yellow full_width">Create Account</button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignInPage;