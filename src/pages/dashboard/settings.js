import "./dashboard.css";

import React, { useEffect, useRef, useState } from "react";

import { Controller, useForm } from 'react-hook-form';
import { Input, Tabs, Spin, notification } from 'antd';
import * as yup from 'yup';
import { LoadingOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';
import { updateUser } from '../../utils/reducers/auth';
import { useNavigate } from "react-router";
import { v4 as uuid } from 'uuid';
import ModalDisplay from "../../components/referral-modal";
import { _update_basic_user_info, _update_password_from_settings } from "../../utils/axiosroutes";

import TopNav from "./top-bar";
import SideBar from "./side-bar";
import Footer from "../../components/footer";


const ProfileSettings = props => {

    const navigate = useNavigate();
    const [loadingData, setLoadingData] = useState(false);
    const [loadPasswordUpdate, setLoadPasswordUpdate] = useState(false);
    const [loadPasswordError, setLoadPasswordError] = useState(false);
    const [currDisplay, setCurrDisplay] = useState("settings");

    const [loadUserUpdate, setLoadUserUpdate] = useState(false);
    const [loadUserError, setLoadUserError] = useState(false);

    const [uuidv4] = useState(uuid());

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description: message
        });
    };

    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />;
    const spinnerIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

    const digitsOnly = (value) => /^\d+$/.test(value);

    const userValidator = yup.object().shape({
        emailAddress: yup.string().email('Email address is not valid').required('Email address field is required'),
        firstName: yup.string().required('First name field is required'),
        lastName: yup.string().required('Last name field is required'),
        phoneNumber: yup.string()
            .min(9, 'Please enter a valid phone number')
            .required('Phone number field is required')
            .test('Digits only', 'The field should have digits only', digitsOnly)
            .nullable()
    })
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(userValidator)
    });

    const changePasswordValidator = yup.object().shape({
        oldPassword: yup.string().min(6, 'Password can not be less than 6 characters').required('Please enter old password'),
        newPassword: yup.string().min(6, 'Password can not be less than 6 characters').required('Please enter new password')
    })
    const { handleSubmit: handleChangePassword, control: controlPasswordChange,
        formState: { errors: errorsChangePassword } } = useForm({
            resolver: yupResolver(changePasswordValidator)
        })

    const changePassword = async e => {
        setLoadPasswordUpdate(true);
        try {
            let newPass = await _update_password_from_settings({
                oldPassword: e.oldPassword,
                newPassword: e.newPassword
            });
            if (newPass.data.statusMessage === 'success') {
                openNotificationWithIcon('success', 'Password updated successfully');
                navigate(0);
            } else {
                setLoadPasswordError(newPass.data.summary);
                setLoadPasswordUpdate(false);
            }
        } catch (err) {
            setLoadPasswordError('An error occurred. Please try again later');
            setLoadPasswordUpdate(false);
        }
    }

    const updateUserInfo = async e => {
        setLoadUserUpdate(true);
        let { emailAddress, firstName, lastName, phoneNumber } = e;
        try {
            let updateUser = await _update_basic_user_info({ emailAddress, firstName, lastName, phoneNumber });
            if (updateUser.data.statusMessage === "success") {
                openNotificationWithIcon('success', 'Data updated successfully');
                props.updateUser(updateUser.data.message);
                navigate(0);
            } else {
                setLoadUserError(updateUser.data.summary);
                setLoadUserUpdate(false);
            }
        } catch (err) {
            setLoadUserError('An error occurred. Please try again later');
            setLoadUserUpdate(false);
        }
    }

    return (
        <div>
            <Spin spinning={loadingData} indicator={spinnerIcon}>
                <div className="dashboard-profile">
                    {/* <TopNav pageTitle="Account Overview" /> */}
                    <div className="dash-side-bar">
                        <SideBar />
                    </div>
                    <div className="dash-main-div">
                        <TopNav />
                        <div className="dash-main-content">
                            <div className="main-dash-nav">
                                <ul>
                                    <li
                                        className={`${currDisplay === "settings" ? "currentDis" : ""}`}
                                        onClick={() => {
                                            setCurrDisplay("settings")
                                        }}>Basic Settings</li>
                                    <li
                                        className={`${currDisplay === "password" ? "currentDis" : ""}`}
                                        onClick={() => {
                                            setCurrDisplay("password")
                                        }}>Change Password</li>
                                </ul>
                            </div>
                            <div className="dash-content">
                                <div className="center-div">
                                    <div className="white-dash-data">
                                        <h5 className="white-dash-title">Update Profile Data</h5>
                                        {
                                            currDisplay === "settings" ?
                                                <div>
                                                    <div className="width_7">
                                                        {loadUserError ?
                                                            <p className="errorMessage">{loadUserError}</p> : ''
                                                        }
                                                        <form onSubmit={handleSubmit(updateUserInfo)}>
                                                            <div className="form_flex">
                                                                <div className="form-group space">
                                                                    <label htmlFor="firstName">First name</label>
                                                                    <Controller name="firstName" control={control} defaultValue={props.auth.userDetails.firstName}
                                                                        render={({ field }) => {
                                                                            return (
                                                                                <Input style={{ height: '5rem' }} type="text" {...field}
                                                                                    name="firstName" />
                                                                            )
                                                                        }} />
                                                                    {errors.firstName && <p className="errorMessage">{errors.firstName.message}</p>}
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="lastName">Last name</label>
                                                                    <Controller name="lastName" control={control} defaultValue={props.auth.userDetails.lastName}
                                                                        render={({ field }) => {
                                                                            return (
                                                                                <Input style={{ height: '5rem' }} type="text" {...field}
                                                                                    name="lastName" />
                                                                            )
                                                                        }} />
                                                                    {errors.lastName && <p className="errorMessage">{errors.lastName.message}</p>}
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="phoneNumber">Phone number</label>
                                                                <Controller name="phoneNumber" control={control} defaultValue={props.auth.userDetails.phoneNumber}
                                                                    render={({ field }) => {
                                                                        return (
                                                                            <Input type="tel" style={{ height: '5rem' }} {...field}
                                                                                name="phoneNumber" />
                                                                        )
                                                                    }} />
                                                                {errors.phoneNumber && <p className="errorMessage">{errors.phoneNumber.message}</p>}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="emailAddress">Email address</label>
                                                                <Controller name="emailAddress" control={control} defaultValue={props.auth.userDetails.emailAddress}
                                                                    render={({ field }) => {
                                                                        return (
                                                                            <Input style={{ height: '5rem' }} disabled type="email" {...field}
                                                                                name="emailAddress" />
                                                                        )
                                                                    }} />
                                                                {errors.emailAddress && <p className="errorMessage">{errors.emailAddress.message}</p>}
                                                            </div>
                                                            <div style={{ marginTop: '5%', display: 'block' }}></div>
                                                            {
                                                                !loadUserUpdate ?
                                                                    <button type="submit"
                                                                        className="btn-yellow"
                                                                        style={{ display: 'block', borderRadius: '4px' }}
                                                                        id="submit-form">Update profile</button>
                                                                    :
                                                                    <button id="submit-form" className="btn-yellow"
                                                                        style={{ display: 'block', borderRadius: '4px' }}
                                                                        disabled><Spin indicator={antIcon} /></button>
                                                            }
                                                        </form>
                                                    </div>
                                                </div>
                                                :
                                                <div>
                                                    <div className="width_7">
                                                        {loadPasswordError ?
                                                            <p className="errorMessage">{loadPasswordError}</p> : ''
                                                        }
                                                        <form onSubmit={handleChangePassword(changePassword)}>
                                                            <div className="form-group">
                                                                <label htmlFor="oldPassword">Old Password</label>
                                                                <Controller name="oldPassword" control={controlPasswordChange} defaultValue=""
                                                                    render={({ field }) => {
                                                                        return (
                                                                            <Input.Password style={{ height: '5rem' }} type="password" {...field}
                                                                                name="oldPassword" />
                                                                        )
                                                                    }} />
                                                                {errorsChangePassword.oldPassword && <p className="errorMessage">{errorsChangePassword.oldPassword.message}</p>}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="newPassword">New Password</label>
                                                                <Controller name="newPassword" control={controlPasswordChange} defaultValue=""
                                                                    render={({ field }) => {
                                                                        return (
                                                                            <Input.Password type="password" style={{ height: '5rem' }} {...field}
                                                                                name="newPassword" />
                                                                        )
                                                                    }} />
                                                                {errorsChangePassword.newPassword && <p className="errorMessage">{errorsChangePassword.newPassword.message}</p>}
                                                            </div>
                                                            <div style={{ marginTop: '5%', display: 'block' }}></div>
                                                            {
                                                                !loadPasswordUpdate ?
                                                                    <button type="submit"
                                                                        className="btn-yellow"
                                                                        style={{ display: 'block', borderRadius: '4px' }}
                                                                        id="submit-form">Update password</button>
                                                                    :
                                                                    <button id="submit-form"
                                                                        className="btn-yellow"
                                                                        style={{ display: 'block', borderRadius: '4px' }}
                                                                        disabled><Spin indicator={antIcon} /></button>
                                                            }
                                                        </form>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-only">
                    <Footer noMargin={true} />
                </div>
            </Spin >
        </div >
    )
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, { updateUser })(ProfileSettings);