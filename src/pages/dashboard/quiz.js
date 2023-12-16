import "./dashboard.css";

import React, { useEffect, useState } from "react";

import { Divider, Skeleton, Spin, notification } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { updateUser } from '../../utils/reducers/auth';
import { _get_all_quizzes } from "../../utils/axiosroutes";
import { DateTime } from 'luxon';

import TopNav from "./top-bar";
import SideBar from "./side-bar";
import Footer from "../../components/footer";

import EmptyDataImage from "../../assets/images/illustrations/8_globe.png";
import ErrorImage from "../../assets/images/illustrations/18_sad_emoji.png";
import { ReactComponent as AwardIcon } from "../../assets/images/icons/award-t.svg";
import { Link } from "react-router-dom";
import AllAppRoutes from "../../utils/routes";


const ProfileClassQuiz = () => {

    const [loadingData, setLoadingData] = useState(false);

    const [quizData, setQuizData] = useState([]);
    const [subjectsData, setSubjectsData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filterTag, setFilterTag] = useState('all');
    const [errorOccurred, setErrorOccurred] = useState(false);

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description: message
        });
    };

    const getAllQuizzes = async () => {
        setLoadingData(true);
        try {
            let getQuizzes = await _get_all_quizzes();
            if (getQuizzes.data.statusMessage === "success") {
                setLoadingData(false);
                setQuizData(getQuizzes.data.message);
                setErrorOccurred(false);
                setFilteredData(getQuizzes.data.message);
                let subjectsBox = [];
                getQuizzes.data.message.forEach(note => {
                    if (!subjectsBox.includes(note.subject.subjectName.toLowerCase())) {
                        subjectsBox.push(note.subject.subjectName.toLowerCase());
                    }
                })
                setSubjectsData(subjectsBox);
            } else {
                setLoadingData(false);
                setErrorOccurred(true);
                openNotificationWithIcon('error', 'An error occurred while loading data. Please reload page to try again');
            }
        } catch (err) {
            setLoadingData(false);
            setErrorOccurred(true);
            openNotificationWithIcon('error', 'An error occurred while loading data. Please reload page to try again');
        }
    }

    useEffect(() => {
        getAllQuizzes();
    }, []);

    let skeleton = [];
    for (let i = 0; i < 16; i++) {
        skeleton.push(<Skeleton active />)
    }

    const filterVideos = filterTag => {
        setFilterTag(filterTag);
        filterTag = filterTag.toLowerCase();
        if (filterTag === "all") {
            setFilteredData(quizData);
        } else {
            let newBox = [];
            quizData.forEach(note => {
                if (note.subject.subjectName.toLowerCase() === filterTag) {
                    newBox.push(note);
                }
            })
            setFilteredData(newBox);
        }
    }

    const spinnerIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

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
                            <div className="main-dash-nav">
                                <ul>
                                    <li>All Quizzes</li>
                                </ul>
                            </div>
                            <div className="dash-content">
                                <div className="contain">
                                    <div className="class-content-layout">
                                        {
                                            !loadingData ?
                                                !errorOccurred ?
                                                    quizData.length ?
                                                        <>
                                                            <div className="subject-tag-box">
                                                                <div
                                                                    onClick={() => filterVideos('all')}
                                                                    className={`subject-tag ${filterTag === "all" ? 'active' : ''}`}>
                                                                    <p>ALL</p>
                                                                </div>
                                                                {subjectsData.map((subject, index) => (
                                                                    <div
                                                                        onClick={() => filterVideos(subject)}
                                                                        className={`subject-tag ${filterTag === subject.toLowerCase() ? 'active' : ''}`} key={index}>
                                                                        <p>{subject.toUpperCase()}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="grid-4 mt-5">
                                                                {
                                                                    filteredData.map((quiz, index) => (
                                                                        <div className="quiz-card-sect" key={index}>
                                                                            <div className="quiz-tag-header">
                                                                                <p>{quiz.subject.subjectName.slice(0, 1)}{quiz.subject.subjectName.slice(1).toLowerCase()}</p>
                                                                            </div>
                                                                            <div className="quiz-title-header">
                                                                                <h3>{quiz.quizTitle.slice(0, 1).toUpperCase()}{quiz.quizTitle.slice(1).toLowerCase()}</h3>
                                                                                <p>Learn how to make front-end web apps with ease using Vue.js, an
                                                                                    increasingly popular JavaScript front-end</p>
                                                                            </div>
                                                                            {/* <div className="quiz-title-footer">
                                                                                    <p>{quiz.quizQuestions.length} questions</p>
                                                                                    <p>{DateTime.fromISO(quiz?.createdAt).toLocaleString(DateTime.DATE_HUGE)}</p>
                                                                                </div> */}
                                                                            <div className="quiz-title-footer">
                                                                                <Link to={`${AllAppRoutes.profileQuizDetail}/${quiz._id}`}>Take Quiz</Link>
                                                                                {/* <p><AwardIcon /></p>
                                                                                    <p>{DateTime.fromISO(notes?.createdAt).toLocaleString(DateTime.DATE_HUGE)}</p> */}
                                                                            </div>
                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>
                                                        </>
                                                        :
                                                        <div className="empty-content">
                                                            <div>
                                                                <img src={EmptyDataImage} alt="globe" />
                                                                <p>There is no data here yet. Uploading is still ongoing so please check back later.</p>
                                                            </div>
                                                        </div>
                                                    :
                                                    <div className="empty-content">
                                                        <div>
                                                            <img src={ErrorImage} alt="illustration of a sad face" />
                                                            <p>An error occurred while loading data. Please reload page to try
                                                                again and contact our support team if errors persist</p>
                                                        </div>
                                                    </div> :
                                                <div className="grid-4">
                                                    {skeleton.map((placeHolder, index) => (
                                                        <div className="item" key={index}>
                                                            {placeHolder}
                                                            <Divider />
                                                        </div>
                                                    ))}
                                                </div>
                                        }
                                        <div className="mt-5"></div>
                                        <div className="mt-5"></div>
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

export default connect(mapStateToProps, { updateUser })(ProfileClassQuiz);