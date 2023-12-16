import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Facebook } from "../assets/images/facebook.svg";
import { ReactComponent as Twitter } from "../assets/images/twitter.svg";
import { ReactComponent as LinkedIn } from "../assets/images/linkedin.svg";
import { ReactComponent as Instagram } from "../assets/images/instagram.svg";

const Footer = props => {
    return (
        <div className={`footer ${props.margin ? 'margin' : ''}`}>
            <div className="contain">
                <div className="footer-grid-2">
                    <div>
                        <h4>CONTACT US</h4>
                        <p>+234 813 227 7316</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link to="">EMPLOYMENT</Link>
                            </li>
                            <li>
                                <Link to="">ENROL</Link>
                            </li>
                            <li>
                                <Link to="">PARENT LOUNGE</Link>
                            </li>
                            <li>
                                <Link to="">STAFF</Link>
                            </li>
                            <li>
                                <Link to="">ALUMS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-grid-2 sec-2">
                    <div>
                        <p className="ims-story">At IGS, we acknowledge the First Nations People of Australia as the strong, resilient and
                            resourceful custodians who have passed on their cultures, stories and songs for
                            generations always connected to Country and nurturing the land, seas and skies. We
                            pay our respects to the Gadigal People of the Eora Nation on whose lands IGS stands
                            and where we strive to value the perspectives of the oldest surviving culture in the
                            world. This land was, is, and always will be Aboriginal land.</p>
                    </div>
                    <div>
                        <div className="icon-showcase">
                            <div className="social-icon"><Facebook /></div>
                            <div className="social-icon"><Instagram /></div>
                            <div className="social-icon"><LinkedIn /></div>
                            <div className="social-icon"><Twitter /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="footer-grid">
                    <div className="first-sect">
                        <h4>IMS Schools</h4>
                        <p>This short quiz will sort you out. Answer a few simple questions to get personal career
                            advice and course recommendations.</p>
                        <button>Reach out to us</button>
                    </div>
                    <div>
                        <h4>Who We Are</h4>
                        <ul>
                            <li>
                                <Link to="">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="">Our Blog</Link>
                            </li>
                            <li>
                                <Link to="">About Us</Link>
                            </li>
                            <li>
                                <Link to="">FAQs</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Support</h4>
                        <ul>
                            <li>
                                <Link to="">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="">Our Blog</Link>
                            </li>
                            <li>
                                <Link to="">About Us</Link>
                            </li>
                            <li>
                                <Link to="">FAQs</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Meet Us</h4>
                        <div>
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-linkedin"></ion-icon>
                            <ion-icon name="logo-twitter"></ion-icon>
                        </div>
                        <p>123, Windston alley, Powerline bus stop, Ikotun, <br /> Lagos State, Nigeria.</p>
                        <p>0813 227 7316, eadelekeife@gmail.com</p>
                    </div>
                </div> */}
            <div className="sec-footer">
                <div className="contain">
                    <div className="footer-grid-2">
                        <div>
                            <p>©2023 All Rights Reserved.</p>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <Link to="">Accessibility</Link>
                                </li>
                                <li>
                                    <Link to="">|</Link>
                                </li>
                                <li>
                                    <Link to="">Consumer Information</Link>
                                </li>
                                <li>
                                    <Link to="">|</Link>
                                </li>
                                <li>
                                    <Link to="">Privacy & Security</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;