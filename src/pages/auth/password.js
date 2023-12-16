import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { connect } from "react-redux";
import { notification, Input, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { Link, useSearchParams, useNavigate } from "react-router-dom";

import Nav from "../../components/nav";
import Footer from "../../components/footer";
import AllAppRoutes from "../../utils/routes";
import { _fetch_student_from_token, _set_new_user_password } from "../../utils/axiosroutes";

const SetPasswordPage = () => {
    const { handleSubmit, control, formState: { errors }, setValue } = useForm({});

    const searchParams = useSearchParams();
    const Navigate = useNavigate();
    const spinnerIcon = <LoadingOutlined style={{ fontSize: 40, color: '#fff' }} spin />;
    const spinIcon = <LoadingOutlined style={{ fontSize: 40, color: '#4A3E97' }} spin />;

    const [submittingForm, setSubmittingForm] = useState(false);
    const [loadingData, setLoadingData] = useState(true);
    const [studentData, setStudentData] = useState({});
    const [errorOccurred, setErrorOccurred] = useState(false);
    // const [token] = useState(searchParams.get('token'))
    const [token] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhNmVlNTc3My1kMDk0LTQyODctYTBiMi03NTUzNzUxMjQ1ZGUiLCJpYXQiOjE2OTg3MDMzMjF9.G7QjPuSw2tXd6yV_MKH0TvtXmzeSdhXAXF-sAntjVu4');

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description: message
        });
    };

    const loadStudentData = async () => {
        setLoadingData(true);
        try {
            let getStudent = await _fetch_student_from_token();
            if (getStudent.data.statusMessage === "success") {
                setLoadingData(false);
                let userData = getStudent.data.message;
                setValue('firstName', userData.firstName);
                setValue('lastName', userData.lastName);
                setValue('emailAddress', userData.emailAddress);
                setStudentData(getStudent.data.message);
                // setErrorOccurred(false);
            } else {
                setLoadingData(false);
                // setErrorOccurred(true);
                openNotificationWithIcon('error', 'An error occurred while loading student data. Please reload page to try again');
            }
        } catch (err) {
            setLoadingData(false);
            // setErrorOccurred(true);
            openNotificationWithIcon('error', 'An error occurred while loading student data. Please reload page to try again');
        }
    }

    const setNewPassword = async e => {
        setSubmittingForm(true);
        let data = {
            password: e.password,
            resetToken: token
        }
        try {
            let setPass = await _set_new_user_password(data);
            console.log(setPass)
            if (setPass.data.statusMessage === "success") {
                openNotificationWithIcon('success', 'Password set successfully. Please log in to continue');
                Navigate(AllAppRoutes.sign_in);
            } else {
                setSubmittingForm(false);
                openNotificationWithIcon('error', 'An error occurred while setting new password. Please try again');
            }
        } catch (err) {
            setSubmittingForm(false);
            openNotificationWithIcon('error', 'An error occurred while setting new password. Please try again');
        }
    }

    useEffect(() => {
        loadStudentData();
    }, [])

    return (
        <div className="form-page">
            <Spin spinning={loadingData} indicator={spinIcon}>
                <div>
                    <div className="login-header">
                        <h2>Isador Model Schools</h2>
                    </div>
                </div>
                <div className="form-page-grid">
                    <div className="text-block">
                        <div className="form-page-detail">
                            <div className="center">
                                <h4>Set Password!</h4>
                                <p>Login into your student dashboard</p>
                            </div>
                            <form onSubmit={handleSubmit(setNewPassword)}>
                                <div className="form-group">
                                    <label htmlFor="firstName">Full Name</label>
                                    <Controller name="firstName" control={control}
                                        render={({ field }) => (
                                            <Input {...field} type="text" name="firstName" id="firstName" disabled />
                                        )} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Controller name="password" control={control}
                                        render={({ field }) => (
                                            <Input.Password {...field} name="password" id="password" />
                                        )} />
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
                                        <Link className="forgot" to={AllAppRoutes.contact_us}>Forgot your Password?</Link>
                                        <p>Don't have a CarMax account? <Link className="forgot" to={AllAppRoutes.contact_us}>Forgot your Password?</Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Spin>
            {/* <Footer /> */}
        </div>
    )
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(SetPasswordPage)