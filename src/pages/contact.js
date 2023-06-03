import React, { useState } from "react";
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Input, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Nav from "../components/nav";
import Footer from "../components/footer";

const ContactPage = () => {

    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#000' }} spin />;

    const signupValidator = yup.object().shape({
        emailAddress: yup.string().email('Please enter a valid email address').required('Please enter your email address'),
        password: yup.string().required('Please enter your password'),
        firstName: yup.string().required('Please enter your first name'),
        lastName: yup.string().required('Please enter your last name')
    })

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(signupValidator)
    });

    const [loadingData, setLoadingData] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const signUpUser = () => { }

    return (
        <div>
            <Nav />
            <div className="contact-hero">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <h5>REACH OUT TO US</h5>
                            <h2>A LOCAL SCHOOL WITH A GLOBAL PERSPECTIVE</h2>
                            <p>Abihome is now Gradoo: Learn all about our name change and our new
                                app in the blog post. Melbourne Girls Grammar is a progressive, contemporary and
                                independent school, which has delivered an exceptional education.</p>
                            <button className="btn-yellow full_width">Call us now!</button>
                        </div>
                        <div>
                            <div className="contact-form">
                                <div className="contact-bg-white">
                                    {
                                        errorMessage ?
                                            <p className="errorMessage">{errorMessage}</p> : ''
                                    }
                                    <form onSubmit={handleSubmit(signUpUser)}>
                                        <div className="form_flex">
                                            <div className="form_group space">
                                                <label htmlFor="firstName">First name</label>
                                                <Controller name="firstName" control={control}
                                                    render={({ field }) => {
                                                        return (
                                                            <Input style={{ height: '5rem' }} type="text" {...field}
                                                                name="firstName" />
                                                        )
                                                    }} />
                                                {errors.firstName && <p className="errorMessage">{errors.firstName.message}</p>}
                                            </div>
                                            <div className="form_group">
                                                <label htmlFor="lastName">Last name</label>
                                                <Controller name="lastName" control={control}
                                                    render={({ field }) => {
                                                        return (
                                                            <Input style={{ height: '5rem' }} type="text" {...field}
                                                                name="lastName" />
                                                        )
                                                    }} />
                                                {errors.lastName && <p className="errorMessage">{errors.lastName.message}</p>}
                                            </div>
                                        </div>
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
                                                        <Input.TextArea type="password" rows={5} {...field}
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
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage;