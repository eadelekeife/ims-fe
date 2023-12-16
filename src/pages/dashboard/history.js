import "./dashboard.css";

import React, { useEffect, useState } from "react";

import { Divider, Skeleton, Spin, Table, Tabs, notification } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { updateUser } from '../../utils/reducers/auth';
import { _fetch_student_notes_history, _fetch_student_quiz_history, _get_all_notes } from "../../utils/axiosroutes";
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';

import TopNav from "./top-bar";
import SideBar from "./side-bar";
import Footer from "../../components/footer";

import EmptyDataImage from "../../assets/images/illustrations/8_globe.png";
import ErrorImage from "../../assets/images/illustrations/18_sad_emoji.png";
import { ReactComponent as AwardIcon } from "../../assets/images/icons/award-t.svg";
import AllAppRoutes from "../../utils/routes";


const ProfileHistory = () => {

    const [loadingData, setLoadingData] = useState(false);

    const [notesHistoryData, setNotesHistoryData] = useState([]);
    const [quizHistoryData, setQuizHistoryData] = useState([]);
    const [subjectsData, setSubjectsData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filterTag, setFilterTag] = useState('all');
    const [errorOccurred, setErrorOccurred] = useState(false);
    const [currDisplay, setCurrDisplay] = useState("notes");

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description: message
        });
    };

    const getNotesHistory = async () => {
        setLoadingData(true);
        try {
            let getNotes = await _fetch_student_notes_history();
            console.log(getNotes)
            if (getNotes.data.statusMessage === "success") {
                setLoadingData(false);
                setNotesHistoryData(getNotes.data.message);
                setErrorOccurred(false);
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

    const getQuizHistory = async () => {
        setLoadingData(true);
        try {
            let getQuizzes = await _fetch_student_quiz_history();
            console.log(getQuizzes)
            if (getQuizzes.data.statusMessage === "success") {
                setLoadingData(false);
                setQuizHistoryData(getQuizzes.data.message);
                setErrorOccurred(false);
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
        getNotesHistory();
        getQuizHistory();
    }, []);

    let skeleton = [];
    for (let i = 0; i < 16; i++) {
        skeleton.push(<Skeleton active />)
    }

    const columns = [
        {
            title: '',
            dataIndex: 'id',
        },
        {
            title: 'Note Title',
            dataIndex: 'name',
        },
        {
            title: 'Date',
            className: 'column-money',
            dataIndex: 'date'
        },
        {
            title: 'Time',
            className: 'column-money',
            dataIndex: 'time'
        },
        {
            title: '',
            dataIndex: 'view',
        },
    ];
    const data = notesHistoryData.map((note, index) => {
        return {
            key: index,
            id: <p>{index + 1}</p>,
            name: <p>{note?.note?.noteTitle}</p>,
            time: <p>{DateTime.fromISO(note?.createdAt).toLocaleString(DateTime.TIME_WITH_SECONDS)}</p>,
            date: <p>{DateTime.fromISO(note?.createdAt).toLocaleString(DateTime.DATE_HUGE)}</p>,
            view: <Link to={`${AllAppRoutes.profileNoteDetail}/${note?.note?._id}`}>View Note</Link>
        }
    });

    const quizColumns = [
        {
            title: '',
            dataIndex: 'id',
        },
        {
            title: 'Quiz Title',
            dataIndex: 'name',
        },
        {
            title: 'Date',
            className: 'column-money',
            dataIndex: 'date'
        },
        {
            title: 'Time',
            className: 'column-money',
            dataIndex: 'time'
        },
        {
            title: 'Score',
            className: 'column-money',
            dataIndex: 'score'
        },
        {
            title: '',
            dataIndex: 'view',
        },
    ];
    const quizData = quizHistoryData.map((note, index) => {
        return {
            key: index,
            id: <p>{index + 1}</p>,
            name: <p>{note?.quiz?.quizTitle}</p>,
            score: <p>{note?.correctAnswers}</p>,
            time: <p>{DateTime.fromISO(note?.createdAt).toLocaleString(DateTime.TIME_WITH_SECONDS)}</p>,
            date: <p>{DateTime.fromISO(note?.createdAt).toLocaleString(DateTime.DATE_HUGE)}</p>,
            view: <Link to={`${AllAppRoutes.profileQuizDetail}/${note?.quiz?._id}`}>View Quiz</Link>
        }
    });


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
                                    <li
                                        className={`${currDisplay === "notes" ? "currentDis" : ""}`}
                                        onClick={() => {
                                            setCurrDisplay("notes")
                                        }}>Notes History</li>
                                    <li
                                        className={`${currDisplay === "quiz" ? "currentDis" : ""}`}
                                        onClick={() => {
                                            setCurrDisplay("quiz")
                                        }}>Quiz History</li>
                                </ul>
                            </div>
                            <div className="dash-content">
                                <div className="contain">
                                    <div className="class-content-layout">
                                        {/* <h5 className="white-dash-title">Class History</h5> */}
                                        {
                                            currDisplay === "notes" ?
                                                <div>

                                                    {
                                                        !loadingData ?
                                                            !errorOccurred ?
                                                                notesHistoryData.length ?
                                                                    <>
                                                                        <div className="desktop-only">
                                                                            <Table
                                                                                columns={columns}
                                                                                dataSource={data}
                                                                                bordered
                                                                                footer={null}
                                                                            />
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
                                                                </div>
                                                            :
                                                            <div className="grid-4">
                                                                {skeleton.map((placeHolder, index) => (
                                                                    <div className="item" key={index}>
                                                                        {placeHolder}
                                                                        <Divider />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                    }
                                                </div>
                                                :
                                                <div>
                                                    {
                                                        !loadingData ?
                                                            !errorOccurred ?
                                                                notesHistoryData.length ?
                                                                    <>
                                                                        <div className="desktop-only">
                                                                            <Table
                                                                                columns={quizColumns}
                                                                                dataSource={quizData}
                                                                                bordered
                                                                                footer={null}
                                                                            />
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
                                                                </div>
                                                            :
                                                            <div className="grid-4">
                                                                {skeleton.map((placeHolder, index) => (
                                                                    <div className="item" key={index}>
                                                                        {placeHolder}
                                                                        <Divider />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                    }
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

export default connect(mapStateToProps, { updateUser })(ProfileHistory);