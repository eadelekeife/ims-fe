import React, { useEffect, useState } from "react";

import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import AppRoutes from "../utils/routes";

const Nav = () => {
    const [fixedNav, setFixedNav] = useState(false);

    const handleScroll = () => {
        console.log('yo')
        if (window.pageYOffset > 100) {
            setFixedNav(true);
        } else {
            setFixedNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])
    return (
        <div>
            <div className={`navigation ${fixedNav ? 'fix' : ''}`}>
                <div>
                    {/* <Logo /> */}
                    <h1>Isador <br /> Model Schools</h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to={AppRoutes.home}>Home</Link>
                        </li>
                        <li>
                            <Link to={AppRoutes.about_us}>About Us</Link>
                        </li>
                        <li>
                            <Link to={AppRoutes.contact}>Contact Us</Link>
                        </li>
                        <li>
                            <Link to={AppRoutes.blog}>Blog</Link>
                        </li>
                        <li>
                            <Link to={AppRoutes.notes}>Notes</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to={AppRoutes.signin}>Sign In</Link>
                        </li>
                        <li className="colored">
                            <Link to="">Student Portal</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;