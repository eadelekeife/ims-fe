import "./dashboard.css";

import React, { useEffect, useState } from "react";

import { Divider, Spin, notification, Skeleton, Radio, Modal } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { updateUser } from '../../utils/reducers/auth';
import { useParams, Link } from "react-router-dom";
import { DateTime } from 'luxon';
import { _cancel_fund_user_wallet, _fetch_single_note, _fetch_single_quiz, _fetch_user_wallet, _fund_user_wallet_balance, _initiate_fund_user_wallet_balance, _mark_note_as_read, _mark_quiz_as_read, _update_basic_user_info, _update_password_from_settings } from "../../utils/axiosroutes";

import TopNav from "./top-bar";
import SideBar from "./side-bar";
import Footer from "../../components/footer";

import EmptyDataImage from "../../assets/images/illustrations/8_globe.png";
import { ReactComponent as ArrowLeft } from "../../assets/images/arrow-left-circle.svg";

import AllCorrectImg from "../../assets/images/illustrations/6_stars.png";
import AboveHalfCorrectImg from "../../assets/images/illustrations/6_book.png";
import HalfCorrectImg from "../../assets/images/illustrations/20_picture.png";
import LessHalfCorrectImg from "../../assets/images/illustrations/8_clouds.png";
import NoneCorrectImg from "../../assets/images/illustrations/14_rhombus.png";


import AllAppRoutes from "../../utils/routes";

const ProfileQuizDetail = props => {

    const searchParam = useParams();
    const [loadingData, setLoadingData] = useState(true);
    const [quizDetail, setQuizDetail] = useState({});
    const [emptyNote, setEmptyNote] = useState(false);
    const [errorOccurred, setErrorOccurred] = useState(false);
    const [currIndex, setCurrIndex] = useState(0);
    const [currQuestion, setCurrQuestion] = useState({});
    const [userAnswers, setUserAnswers] = useState([]);
    const [, setFirst] = useState('');
    const [quizComplete, setQuizComplete] = useState(false);
    const [finalCorrectAnswer, setFinalCorrectAnswer] = useState(0);
    const [showFinal, setShowFinal] = useState(false);

    const spinnerIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

    let skeleton = [];
    for (let i = 0; i < 16; i++) {
        skeleton.push(<Skeleton active />)
    }

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description: message
        });
    };

    const fetchSingleNote = async () => {
        setLoadingData(true);
        try {
            let fetchQuiz = await _fetch_single_quiz(searchParam.planId);
            if (fetchQuiz.data.statusMessage === "success") {
                if (typeof fetchQuiz.data.message?.quizTitle === "undefined") {
                    openNotificationWithIcon('error', 'Quiz not found. Please go back to previous page to try again');
                    setEmptyNote(true);
                    setErrorOccurred(true);
                } else {
                    setCurrQuestion(fetchQuiz.data.message.quizQuestions[currIndex]);
                    setUserAnswers(new Array(fetchQuiz.data.message.quizQuestions.length).fill({
                        userAnswers: "",
                        correctAnswer: ""
                    }));
                    setQuizDetail(fetchQuiz.data.message);
                }
                setLoadingData(false);
            } else {
                setErrorOccurred(true);
                setLoadingData(false);
                openNotificationWithIcon('error', 'An error occurred while fetching quiz. Please reload page to try again');
            }
        } catch (err) {
            setErrorOccurred(true);
            setLoadingData(false);
            openNotificationWithIcon('error', 'An error occurred while fetching quiz. Please reload page to try again');
        }
    }

    const markQuizAsTaken = async e => {
        setLoadingData(true);
        try {
            let takeQuiz = await _mark_quiz_as_read({ quizId: searchParam.planId, correctAnswer: e });
            if (takeQuiz.data.statusMessage === "success") {
                setLoadingData(false);
                // openNotificationWithIcon('success', 'Quiz updated successfully.');
            } else {
                setLoadingData(false);
                openNotificationWithIcon('error', 'An error occurred while updating quiz. Please try again');
            }
        } catch (err) {
            console.log(err)
            setLoadingData(false);
            openNotificationWithIcon('error', 'An error occurred while updating quiz. Please try again');
        }
    }

    const changeUserAnswer = e => {
        let newArr = userAnswers;
        newArr[currIndex] = {
            userAnswer: e.target.value,
            correctAnswer: quizDetail.quizQuestions[currIndex].correctAnswer
        };
        setUserAnswers(newArr);
        setFirst(e);
    }

    const changeCurrentQuestion = type => {
        if (type === "next") {
            if ((currIndex + 1) !== quizDetail?.quizQuestions?.length) {
                if (userAnswers[currIndex]?.userAnswer?.length) {
                    let index = currIndex + 1;
                    setCurrIndex(index);
                    setCurrQuestion(quizDetail.quizQuestions[index]);
                } else {
                    openNotificationWithIcon('error', 'Please answer current question before moving to next question')
                }
            }
        } else {
            if ((currIndex !== 0)) {
                let index = currIndex - 1;
                setCurrIndex(index);
                setCurrQuestion(quizDetail.quizQuestions[index]);
            }
        }
    }

    const markQuizAsComplete = async () => {
        let correctAnswer = 0;
        userAnswers.forEach(answers => {
            if (answers.userAnswer === answers.correctAnswer) {
                correctAnswer++
            }
        })
        try {
            await markQuizAsTaken(correctAnswer);
        } catch (err) {
            console.log(err)
            openNotificationWithIcon('error', 'An error occurred while storing quiz data');
        }
        setQuizComplete(true);
        setFinalCorrectAnswer(correctAnswer);
        setShowFinal(true);
    }

    useEffect(() => {
        fetchSingleNote();
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
                                <div className="contain">
                                    <div className="white-dash-gri">
                                        <div className="class-content-layout detail">
                                            <div className="class-detail-content">
                                                <div>
                                                    <Link className="previous-link" to={AllAppRoutes.profileNotes}><ArrowLeft /> Go Back to All Quizzes</Link>
                                                </div>
                                                {
                                                    loadingData ?
                                                        <div>
                                                            {skeleton.map((placeHolder, index) => (
                                                                <div className="item" key={index}>
                                                                    {placeHolder}
                                                                    <Divider />
                                                                </div>
                                                            ))}
                                                        </div>
                                                        :
                                                        errorOccurred ?
                                                            emptyNote ?
                                                                <div className="empty-content">
                                                                    <div>
                                                                        <img src={EmptyDataImage} alt="globe" />
                                                                        <p>Quiz not found. Please go back to previous page to try again or check that quiz id is correct.</p>
                                                                    </div>
                                                                </div>
                                                                :
                                                                <div className="empty-content">
                                                                    <div>
                                                                        <img src={EmptyDataImage} alt="globe" />
                                                                        <p>An error occurred while loading data. Please reload page to try again or check that quiz id is correct.</p>
                                                                    </div>
                                                                </div>
                                                            :
                                                            <div>
                                                                <h3 className="innerBodyTitle">{quizDetail?.quizTitle?.slice(0, 1).toUpperCase()}{quizDetail?.quizTitle?.slice(1).toLowerCase()}</h3>
                                                                <div className="tagbox">
                                                                    <div className="tagbox-div">
                                                                        <p>{quizDetail?.quizQuestions?.length} questions</p>
                                                                    </div>
                                                                    <div className="tagbox-div">
                                                                        <p>{quizDetail?.subject?.subjectName}</p>
                                                                    </div>
                                                                    <div className="tagbox-div">
                                                                        <p>{quizDetail?._id}</p>
                                                                    </div>
                                                                    <div className="tagbox-div">
                                                                        <p>{DateTime.fromISO(quizDetail?.createdAt).toLocaleString(DateTime.DATE_HUGE)}</p>
                                                                    </div>
                                                                </div>
                                                                <Divider />
                                                                <div className="quiz-questions">
                                                                    {showFinal ?
                                                                        <div className="answerModal">
                                                                            {
                                                                                finalCorrectAnswer === quizDetail?.quizQuestions?.length ?
                                                                                    <img src={AllCorrectImg} alt="certificate" /> :
                                                                                    (finalCorrectAnswer > +((quizDetail?.quizQuestions?.length) / 2) && finalCorrectAnswer < quizDetail?.quizQuestions?.length) ?
                                                                                        <img src={AboveHalfCorrectImg} alt="book" /> :
                                                                                        finalCorrectAnswer === +((quizDetail?.quizQuestions?.length) / 2) ?
                                                                                            <img src={HalfCorrectImg} alt="book" /> :
                                                                                            (finalCorrectAnswer > 0 && finalCorrectAnswer < +((quizDetail?.quizQuestions?.length) / 2)) ?
                                                                                                <img src={LessHalfCorrectImg} alt="book" />
                                                                                                :
                                                                                                <img src={NoneCorrectImg} alt="rhombus" />
                                                                            }
                                                                            <p>You got {finalCorrectAnswer} {finalCorrectAnswer === 1 ? 'question' : 'questions'} correct out of {quizDetail?.quizQuestions?.length} questions</p>
                                                                            <div className="modal-flex-buttons">
                                                                                <button onClick={() => {
                                                                                    setShowFinal(false);
                                                                                    setCurrIndex(0);
                                                                                    setCurrQuestion(quizDetail.quizQuestions[0])
                                                                                }}>See correct answers</button>
                                                                                <Link to={AllAppRoutes.profileQuiz}>See all quizzes</Link>
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        <div>
                                                                            <h5 className="index-count">{currIndex + 1} of {quizDetail?.quizQuestions?.length}</h5>
                                                                            <h4>{currQuestion.questionTitle}</h4>
                                                                            <div className="quiz-options">
                                                                                <Radio.Group onChange={changeUserAnswer} value={userAnswers[currIndex].userAnswer}>
                                                                                    {currQuestion.questionOptions.map((options, index) => (
                                                                                        <Radio key={index}
                                                                                            disabled={quizComplete}
                                                                                            className={`${quizComplete ?
                                                                                                (userAnswers[currIndex].userAnswer === options.optionTitle) ?
                                                                                                    (userAnswers[currIndex].userAnswer === userAnswers[currIndex].correctAnswer) ?
                                                                                                        'correct-answer' : 'false-answer' :
                                                                                                    (options.optionTitle === userAnswers[currIndex].correctAnswer) ?
                                                                                                        'correct-answer' : '' : ''
                                                                                                }`}
                                                                                            value={options.optionTitle}>{options.optionTitle}</Radio>
                                                                                    ))}
                                                                                </Radio.Group>
                                                                            </div>
                                                                            <div className="quiz-buttons">
                                                                                {
                                                                                    currIndex > 0 ?
                                                                                        <button
                                                                                            onClick={() => changeCurrentQuestion('prev')}
                                                                                            className="prev-button">Previous Question</button> : <div></div>
                                                                                }
                                                                                {
                                                                                    ((currIndex + 1) === (quizDetail.quizQuestions.length)) ?
                                                                                        quizComplete ?
                                                                                            <button
                                                                                                onClick={() => setShowFinal(true)}
                                                                                                className="submit-button">Next</button>
                                                                                            :
                                                                                            <button
                                                                                                onClick={() => markQuizAsComplete()}
                                                                                                className="submit-button">Submit Question</button>
                                                                                        :
                                                                                        <button
                                                                                            onClick={() => changeCurrentQuestion('next')}
                                                                                            className="next-button">Next Question</button>
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                </div>
                                                                <div className="mt-5"></div>
                                                                <div className="mt-5"></div>
                                                            </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-only">
                    <Footer noMargin={true} />
                </div>
            </Spin>
        </div>
    )
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, { updateUser })(ProfileQuizDetail);