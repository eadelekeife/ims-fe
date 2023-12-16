import "./assets/css/index.css";

import React from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";

import AllAppRoutes from "./utils/routes";
import { useLayoutEffect } from 'react';
import ProtectedRoutes from "./utils/protectedRoutes";
import AuthProtectedRoutes from "./utils/AuthProtectedRoute";


// import Homepage from "./pages/homepage";
// import Homepage from "./pages/home1";
import Homepage from "./pages/homepage";
import BlogPage from "./pages/blog";
import ContactPage from "./pages/contact";
import ExcursionPage from "./pages/excursion";
import AboutPage from "./pages/about_us";
import SignInPage from "./pages/signin";
import NotesPage from "./pages/notes";

import Dashboard from "./pages/dashboard/dashboard";
import ProfileSettings from "./pages/dashboard/settings";
import Quiz from "./pages/dashboard/quiz";
import ProfileQuizDetail from "./pages/dashboard/quiz-detail";
import ProfileClassNotes from "./pages/dashboard/notes";
import ProfileHistory from "./pages/dashboard/history";
import ProfileClassNoteDetail from "./pages/dashboard/note-detail";
import AboutUs from "./pages/aboutus";
import Login from "./pages/auth/login";
import SetPassword from "./pages/auth/password";

const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Homepage />} />
                    <Route path="*" exact element={<Navigate to="/" />} />
                    {/* <Route path="/abou" exact element={<AboutPage />} /> */}
                    {/* <Route path="/blog" exact element={<BlogPage />} /> */}
                    <Route path={AllAppRoutes.contact_us} exact element={<ContactPage />} />
                    <Route path={AllAppRoutes.excursion} exact element={<ExcursionPage />} />
                    <Route path={AllAppRoutes.about_us} exact element={<AboutUs />} />
                    <Route path={AllAppRoutes.sign_in} exact element={<Login />} />
                    <Route path={AllAppRoutes.set_password} exact element={<SetPassword />} />
                    <Route path={AllAppRoutes.notes} exact element={<NotesPage />} />

                    <Route path="/dash" exact element={<Dashboard />} />
                    <Route path={AllAppRoutes.profileSettings} exact element={<ProfileSettings />} />
                    <Route path={AllAppRoutes.profileQuiz} exact element={<Quiz />} />
                    <Route path={AllAppRoutes.profileHistory} exact element={<ProfileHistory />} />
                    <Route path={`${AllAppRoutes.profileQuizDetail}/:planId`} exact element={<ProfileQuizDetail />} />
                    <Route path={AllAppRoutes.profileNotes} exact element={<ProfileClassNotes />} />
                    <Route path={`${AllAppRoutes.profileNoteDetail}/:planId`} exact element={<ProfileClassNoteDetail />} />
                    {/* <Route path={AllAppRoutes.profileVideos} exact element={<Videopage />} />
                    <Route path={AllAppRoutes.profileVirtualSubscription} exact element={<VirtualSubscription />} />
                    <Route path={AllAppRoutes.profilePlanOrders} exact element={<Physical />} />
                    <Route path={AllAppRoutes.videoViewsAnalytics} exact element={<VideoViewsAnalytics />} />
                    <Route path={AllAppRoutes.profileTransactionHistory} exact element={<TransactionHistory />} />
                    <Route path={AllAppRoutes.profileVideoUploads} exact element={<VideoUploads />} />
                    <Route path={AllAppRoutes.profileLifestylePlans} exact element={<Lifestyle />} />
                    <Route path={AllAppRoutes.profileHealthcarePlans} exact element={<Healthhcare />} />
                    <Route path={AllAppRoutes.profileMerchandise} exact element={<Merchandise />} />
                    <Route path={AllAppRoutes.profileProductOrders} exact element={<ProductsOrders />} />
                    <Route path={AllAppRoutes.profileVideoPurchaseSuccess} exact element={<VideoPurchaseSuccess />} />
                    <Route path={AllAppRoutes.profileFundWalletSuccess} exact element={<FundWalletSuccess />} />
                    <Route path={AllAppRoutes.profileSubscriptionSuccess} exact element={<SubscriptionSuccess />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes;