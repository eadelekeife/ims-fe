import "./dashboard.css";

import React, { useEffect, useState } from "react";

import { Divider, Spin, notification, Skeleton } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { updateUser } from '../../utils/reducers/auth';
import { useParams, Link } from "react-router-dom";
import { DateTime } from 'luxon';
import { _cancel_fund_user_wallet, _fetch_single_note, _fetch_user_wallet, _fund_user_wallet_balance, _initiate_fund_user_wallet_balance, _mark_note_as_read, _update_basic_user_info, _update_password_from_settings } from "../../utils/axiosroutes";

import TopNav from "./top-bar";
import SideBar from "./side-bar";
import Footer from "../../components/footer";

import EmptyDataImage from "../../assets/images/illustrations/8_globe.png";
import { ReactComponent as ArrowLeft } from "../../assets/images/arrow-left-circle.svg";

import AllAppRoutes from "../../utils/routes";

const ProfileClassNotesDetail = props => {

    const searchParam = useParams();
    const [loadingData, setLoadingData] = useState(true);
    const [noteDetail, setNoteDetail] = useState({});
    const [emptyNote, setEmptyNote] = useState(false);

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
            let fetchNote = await _fetch_single_note(searchParam.planId);
            if (fetchNote.data.statusMessage === "success") {
                if (typeof fetchNote.data.message?.noteTitle === "undefined") {
                    openNotificationWithIcon('error', 'Note not found. Please go back to previous page to try again');
                    setEmptyNote(true);
                } else {
                    setNoteDetail(fetchNote.data.message);
                }
                setLoadingData(false);
            } else {
                setLoadingData(false);
                openNotificationWithIcon('error', 'An error occurred while fetching note. Please reload page to try again');
            }
        } catch (err) {
            setLoadingData(false);
            openNotificationWithIcon('error', 'An error occurred while fetching note. Please reload page to try again');
        }
    }

    const markNoteAsRead = async () => {
        setLoadingData(true);
        try {
            let readNote = await _mark_note_as_read({ noteId: searchParam.planId });
            if (readNote.data.statusMessage === "success") {
                setLoadingData(false);
                openNotificationWithIcon('success', 'Note updated successfully.');
            } else {
                setLoadingData(false);
                openNotificationWithIcon('error', 'An error occurred while updating note. Please try again');
            }
        } catch (err) {
            setLoadingData(false);
            openNotificationWithIcon('error', 'An error occurred while updating note. Please try again');
        }
    }

    useEffect(() => {
        fetchSingleNote();
    }, [])

    return (
        <div>
            <Spin spinning={loadingData} indicator={spinnerIcon}>
                <div className="dashboard-profile">
                    <TopNav pageTitle="Account Overview" />
                    <div className="dash-side-bar">
                        <SideBar />
                    </div>
                    <div className="dash-main-div">
                        <div className="contain">
                            <div className="dash-main-content">
                                <div className="">
                                    <div className="white-dash-gri">
                                        <div className="class-content-layout detail">
                                            <div className="class-detail-content">
                                                <div>
                                                    <Link className="previous-link" to={AllAppRoutes.profileNotes}><ArrowLeft /> Go Back to All Notes</Link>
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
                                                        emptyNote ?
                                                            <div className="empty-content">
                                                                <div>
                                                                    <img src={EmptyDataImage} alt="globe" />
                                                                    <p>Note not found. Please go back to previous page to try again or check that note id is correct.</p>
                                                                </div>
                                                            </div>
                                                            :
                                                            <div>
                                                                <h3 className="innerBodyTitle">{noteDetail?.noteTitle?.slice(0, 1).toUpperCase()}{noteDetail?.noteTitle?.slice(1).toLowerCase()}</h3>
                                                                <div className="tagbox">
                                                                    <div className="tagbox-div">
                                                                        <p>{noteDetail?.term?.termName}</p>
                                                                    </div>
                                                                    <div className="tagbox-div">
                                                                        <p>{noteDetail?.subject?.subjectName}</p>
                                                                    </div>
                                                                    <div className="tagbox-div">
                                                                        <p>{noteDetail?._id}</p>
                                                                    </div>
                                                                    <div className="tagbox-div">
                                                                        <p>{DateTime.fromISO(noteDetail?.createdAt).toLocaleString(DateTime.DATE_HUGE)}</p>
                                                                    </div>
                                                                </div>
                                                                <Divider />
                                                                <p className="innerBodyText" dangerouslySetInnerHTML={{ __html: noteDetail?.noteBody }}></p>
                                                                <div>
                                                                    <button className="btn-purple curve" onClick={markNoteAsRead}>Mark Note as Read</button>
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

export default connect(mapStateToProps, { updateUser })(ProfileClassNotesDetail);