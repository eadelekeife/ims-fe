import React, { useEffect, useState } from "react";

import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as MenuIcon } from "../assets/images/menu.svg";
import { ReactComponent as CancelIcon } from "../assets/images/x.svg";
import { Link } from "react-router-dom";
import AppRoutes from "../utils/routes";
import { Drawer } from "antd";
import AllAppRoutes from "../utils/routes";

const Nav = props => {
    const [fixedNav, setFixedNav] = useState(false);
    const [openMenuDrawer, setOpenMenuDrawer] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setFixedNav(true);
        } else {
            setFixedNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    const showDrawer = () => {
        setOpenMenuDrawer(true);
    };
    const onClose = () => {
        setOpenMenuDrawer(false);
    };
    return (
        <div>
            <div className={`navigation ${props.relativeNav ? 'relativeNav' : ''} ${fixedNav ? 'fix' : ''}`}>
                <div className="inner-nav">
                    {/* <Logo /> */}
                    <h1>Isador Model Schools</h1>
                    {/* </div>
                <div> */}
                    <div className="desktop-only">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to={AppRoutes.about_us}>About Us</Link>
                            </li>
                            <li>
                                <Link to={AppRoutes.contact_us}>Contact Us</Link>
                            </li>
                            <li>
                                <Link to={AppRoutes.excursion}>Excursion</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="desktop-only">
                    <ul>
                        <li>
                            <Link to={AppRoutes.signin}>(+234) 813 227 7316</Link>
                        </li>
                        <li className="colored">
                            <Link to={AppRoutes.sign_in}>Student Portal</Link>
                        </li>
                    </ul>
                </div>
                <div className="mobile-only">
                    <div onClick={() => setOpenMenuDrawer(true)}>
                        <MenuIcon />
                    </div>
                </div>
            </div>
            <Drawer title={null} placement="right" onClose={onClose} open={openMenuDrawer}>
                <div className="mobile-nav">
                    <div className="mobile-header">
                        <div>

                        </div>
                        <div>
                            <div onClick={() => setOpenMenuDrawer(false)}>
                                <CancelIcon />
                            </div>
                        </div>
                    </div>
                    <div className="mobile-list">
                        <ul>
                            <li>
                                <Link to="">Home</Link>
                            </li>
                            <li>
                                <Link to={AllAppRoutes.about_us}>About Us</Link>
                            </li>
                            <li>
                                <Link to={AllAppRoutes.contact_us}>Contact Us</Link>
                            </li>
                            <li>
                                <Link to={AllAppRoutes.excursion}>Excursions</Link>
                            </li>
                            <li>
                                <Link to={AllAppRoutes.sign_in}>Student Portal</Link>
                            </li>
                            <li>
                                <Link to="">Frequently Asked Questions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Nav;