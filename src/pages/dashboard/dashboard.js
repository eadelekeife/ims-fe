import "./dashboard.css";

import React, { useEffect, useRef, useState } from "react";

import { Controller, useForm } from 'react-hook-form';
import { Divider, Input, Tabs, Spin, Modal, notification } from 'antd';
import { Link } from "react-router-dom";
import * as yup from 'yup';
import { LoadingOutlined } from '@ant-design/icons';
import axios from '../../utils/axiosCall';
import { connect } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';
import { updateUser } from '../../utils/reducers/auth';
import { useNavigate } from "react-router";
import { _cancel_fund_user_wallet, _fetch_user_wallet, _fund_user_wallet_balance, _initiate_fund_user_wallet_balance, _update_basic_user_info, _update_password_from_settings } from "../../utils/axiosroutes";

import TopNav from "./top-bar";
import SideBar from "./side-bar";
import Footer from "../../components/footer";

import WalletImg from "../../assets/images/illustrations/14_rhombus.png";
import TokenImg from "../../assets/images/illustrations/17_soap.png";
import User1 from "../../assets/images/illustrations/user-1.png";
import { ReactComponent as PlusIcon } from "../../assets/images/icons/pluc-circle-r.svg";

import CheckSymbol from "../../assets/images/illustrations/Check.png";

import { ReactComponent as Calendar } from "../../assets/images/icons/pie-chart -cropped.svg";
import { ReactComponent as ArchiveIcon } from "../../assets/images/icons/archive-cropped.svg";
import { ReactComponent as Settings } from "../../assets/images/icons/settings-cropped.svg";
import { ReactComponent as MerchandiseIcon } from "../../assets/images/icons/shopping-bag-cropped.svg";

import AllAppRoutes from "../../utils/routes";

const Dashboard = props => {

    const navigate = useNavigate();
    const referralMessage = useRef();
    const paystackButton = useRef(null);
    const fundWalletPaystackButton = useRef(null);
    const [loadingData, setLoadingData] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [size, setSize] = useState('small');
    const [loadPasswordUpdate, setLoadPasswordUpdate] = useState(false);
    const [loadPasswordError, setLoadPasswordError] = useState(false);

    const [loadUserUpdate, setLoadUserUpdate] = useState(false);
    const [loadUserError, setLoadUserError] = useState(false);
    const [openFundWalletModal, setOpenFundWalletModal] = useState(false);
    const [openSubscriptionModal, setOpenSubscriptionModal] = useState(false);
    const [subscriptionPlans, setSubscriptionPlans] = useState([]);
    const [selectedSubscriptionPackage, setSelectedSubscriptionPackage] = useState({});
    const [activeSubPackage, setActiveSubPackage] = useState(0);
    const [referralModal, setReferralModal] = useState(false);
    const [userWalletData, setUserWalletData] = useState({});
    const [loadingWalletData, setLoadingWalletData] = useState(true);
    const [loaderSpinning, setLoaderSpinning] = useState(false);
    const [topupAmount, setTopupAmount] = useState(0);
    const [inputTopupAmount, setInputTopupAmount] = useState(0);
    const [fundWalletStatus, setFundWalletStatus] = useState(false);
    const [userWalletInitializationKey, setUserWalletInitializationKey] = useState('');

    const [userData] = useState(props.auth.isAuthenticated ? props.auth.userDetails : '');
    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />;
    const spinnerIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

    useEffect(() => {
    }, [])

    return (
        <div>
            <Spin spinning={loadingData} indicator={spinnerIcon}>
                <div className="dashboard-profile">
                    <div className="dash-side-bar">
                        <SideBar />
                    </div>
                    <div className="dash-main-div">
                        <TopNav pageTitle="Account Overview" />
                        <div className="dash-main-content">
                            <div className="dash-content">
                                <div className="dash-overview">
                                    <div className="dash-data-block">
                                        <div className="dash-text-block">
                                            <div className="avatar-cover">
                                                {/* <AvatarIcon /> */}
                                                <img src={User1} alt="user avatar" className="user-avatar" />
                                            </div>
                                            <div>
                                                <h2>{`${userData?.firstName} ${userData?.lastName}`}</h2>
                                                {/* <p>{userData.referralCode}</p> */}
                                            </div>
                                        </div>
                                        <div className="grid-2">
                                            <div className="data-block-sec">
                                                <div className="grid-2">
                                                    <div>
                                                        {/* <h3><small>expires -</small> </h3> */}
                                                        <h3>&mdash;</h3>
                                                        {/* <h3 className="balance-display"><span className="currency">NGN </span>{!loadingWalletData ? ((+userWalletData?.balance)?.toFixed(2)?.split('.')[0]) : '-'}.<span>{userWalletData?.balance ? ((+userWalletData?.balance)?.toFixed(2)?.split('.')[1]) : '00'}</span></h3> */}
                                                        <p>Student Class</p>
                                                    </div>
                                                    <div>
                                                        <img src={WalletImg} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="data-block-sec">
                                                <div className="grid-2">
                                                    <div>
                                                        <h3 className="balance-display"><span className="currency">NGN </span>{!loadingWalletData ? ((+userWalletData?.balance)?.toFixed(2)?.split('.')[0]) : '-'}.<span>{userWalletData?.balance ? ((+userWalletData?.balance)?.toFixed(2)?.split('.')[1]) : '00'}</span></h3>
                                                        <p>Earned Badges</p>
                                                    </div>
                                                    <div>
                                                        <img src={TokenImg} alt="" />
                                                    </div>
                                                </div>
                                                {/* <div className="grid-2">
                                                    <div>
                                                        <h3>{!loadingWalletData ? userWalletData?.tokens : '-'}</h3>
                                                        <p>Token Balance</p>
                                                    </div>
                                                    <div>
                                                        <img src={TokenImg} alt="" />
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="data-block">
                                            <div className="data-block-sec">
                                                <Link to={AllAppRoutes.profileSettings}>
                                                    <div className="side-icon-cover">
                                                        <Settings className="side-nav-icon _1" />
                                                    </div><span>Update Profile Data</span>
                                                </Link>
                                            </div>
                                            <div className="data-block-sec">
                                                <Link to={AllAppRoutes.videoViewsAnalytics}>
                                                    <div className="side-icon-cover">
                                                        <Calendar className="side-nav-icon" />
                                                    </div><span>Class Quizzes</span>
                                                </Link>
                                            </div>
                                            <div className="data-block-sec">
                                                <Link to={AllAppRoutes.profileMerchandise}>
                                                    <div className="side-icon-cover">
                                                        <ArchiveIcon className="side-nav-icon" />
                                                    </div><span>Class Notes</span>
                                                </Link>
                                            </div>
                                            <div className="data-block-sec">
                                                <Link to={AllAppRoutes.contact_us}>
                                                    <div className="side-icon-cover">
                                                        <MerchandiseIcon className="side-nav-icon" />
                                                    </div><span>Contact Support</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt_5"></div>
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

export default connect(mapStateToProps, { updateUser })(Dashboard);