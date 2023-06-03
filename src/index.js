import "./assets/css/index.css";
import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage";
import BlogPage from "./pages/blog";
import ContactPage from "./pages/contact";
import AboutUsPage from "./pages/about";
import SignInPage from "./pages/signin";
import AppRoutes from "./utils/routes";
import NotesPage from "./pages/notes";

const App = () => {
    return (
        <div>
            <div>
                {/* <Homepage /> */}
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<Homepage />} />
                        <Route path="/blog" exact element={<BlogPage />} />
                        <Route path="/contact" exact element={<ContactPage />} />
                        <Route path="/aboutus" exact element={<AboutUsPage />} />
                        <Route path={AppRoutes.signin} exact element={<SignInPage />} />
                        <Route path={AppRoutes.notes} exact element={<NotesPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />)