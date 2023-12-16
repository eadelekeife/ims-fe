import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Nav from "../components/nav";
import { Divider } from "antd";

import ManSmiling from "../assets/images/home/ev.webp";
import AbtImg from "../assets/images/home/abt2.jpg";

const AboutUs = () => {
    return (
        <div className="mini-display">
            <Nav />
            <div className="hero-display">
            </div>
            <div className="top-links">
                <ul>
                    <li>
                        <Link className="active" to="">Mission</Link>
                    </li>
                    <li>
                        <Link to="">Leadership</Link>
                    </li>
                    <li>
                        <Link to="">Faculty and Staff</Link>
                    </li>
                    <li>
                        <Link to="">History</Link>
                    </li>
                    <li>
                        <Link to="">Campus Facilities</Link>
                    </li>
                </ul>
            </div>
            <div className="mt_5"></div>
            <div className="about-display">
                <div className="contain">
                    <div className="grid-sec-2">
                        <div>
                            <div>
                                <h4>Mission Statement</h4>
                                <p>Founded in 1976, the mission of The Washington Market School is to educate young children in a
                                    manner that is consistent with the educational philosophies of Dr. Maria Montessori and the
                                    early childhood education programs developed in Reggio Emilia, Italy. Our approach fosters
                                    each child's innate sense of self-motivation and curiosity, which in turn leads to greater
                                    autonomy and self-sufficiency; it also facilitates creativity through independent and
                                    collaborative exploration. We believe in nurturing children's intuitive processes, as well as
                                    their capacity for feeling, in order to help them achieve cognitive, emotional, and social
                                    growth.</p>
                            </div>
                            <div>
                                <h4>Mission Statement</h4>
                                <p>Founded in 1976, the mission of The Washington Market School is to educate young children in a
                                    manner that is consistent with the educational philosophies of Dr. Maria Montessori and the
                                    early childhood education programs developed in Reggio Emilia, Italy. Our approach fosters
                                    each child's innate sense of self-motivation and curiosity, which in turn leads to greater
                                    autonomy and self-sufficiency; it also facilitates creativity through independent and
                                    collaborative exploration. We believe in nurturing children's intuitive processes, as well as
                                    their capacity for feeling, in order to help them achieve cognitive, emotional, and social
                                    growth.</p>
                            </div>
                        </div>
                        <div>
                            <img src={AbtImg} alt="AbtImg" />
                        </div>
                    </div>
                </div>
                <Divider></Divider>
                <div className="contain">
                    <div>
                        <div className="about-center-content">
                            <h3>Our Commitment to Anti-Bias, Anti Racist Practices</h3>
                            <p>The Washington Market School is committed to strengthening its anti-bias, anti racist (ABAR)
                                educational practices. </p>
                        </div>
                        <div className="school-extra-inner-props">
                            <div className="grid-4">
                                <div className="school-extra-1 _1">
                                    <div className="school-extra-img">
                                        <img src={ManSmiling} alt="man smiling" />
                                    </div>
                                    <h3>What Girl Scouts Do</h3>
                                </div>
                                <div className="school-extra-1 _2">
                                    <div className="school-extra-img">
                                        <img src={ManSmiling} alt="man smiling" />
                                    </div>
                                    <h3>What Girl Scouts Do</h3>
                                </div>
                                <div className="school-extra-1 _3">
                                    <div className="school-extra-img">
                                        <img src={ManSmiling} alt="man smiling" />
                                    </div>
                                    <h3>What Girl Scouts Do</h3>
                                </div>
                                <div className="school-extra-1 _4">
                                    <div className="school-extra-img">
                                        <img src={ManSmiling} alt="man smiling" />
                                    </div>
                                    <h3>What Girl Scouts Do</h3>
                                </div>
                            </div>
                        </div>
                        <div className="grid-sec-2">
                            <div>
                                <h4>Early childhood education lays the foundation for how our young children will
                                    engage in the world around them. </h4>
                                <p>Founded in 1976, the mission of The Washington Market School is to educate young children in a
                                    manner that is consistent with the educational philosophies of Dr. Maria Montessori and the
                                    early childhood education programs developed in Reggio Emilia, Italy. Our approach fosters
                                    each child's innate sense of self-motivation and curiosity, which in turn leads to greater
                                    autonomy and self-sufficiency; it also facilitates creativity through independent and
                                    collaborative exploration. We believe in nurturing children's intuitive processes, as well as
                                    their capacity for feeling, in order to help them achieve cognitive, emotional, and social
                                    growth.</p>
                                <p>Founded in 1976, the mission of The Washington Market School is to educate young children in a
                                    manner that is consistent with the educational philosophies of Dr. Maria Montessori and the
                                    early childhood education programs developed in Reggio Emilia, Italy. Our approach fosters
                                    each child's innate sense of self-motivation and curiosity, which in turn leads to greater
                                    autonomy and self-sufficiency; it also facilitates creativity through independent and
                                    collaborative exploration. We believe in nurturing children's intuitive processes, as well as
                                    their capacity for feeling, in order to help them achieve cognitive, emotional, and social
                                    growth.</p>
                            </div>
                        </div>
                    </div>
                    <div className="school-extra-inner-props">
                        <div className="grid-4">
                            <div className="school-extra-1 _1">
                                <div className="school-extra-img">
                                    <img src={ManSmiling} alt="man smiling" />
                                </div>
                                <h3>What Girl Scouts Do</h3>
                                <p>Join a distinguished list of partners that invest in the future. Your lifetime
                                    membership also includes benefits, such as discounts and invitations to special events.</p>
                            </div>
                            <div className="school-extra-1 _2">
                                <div className="school-extra-img">
                                    <img src={ManSmiling} alt="man smiling" />
                                </div>
                                <h3>What Girl Scouts Do</h3>
                                <p>Join a distinguished list of partners that invest in the future. Your lifetime
                                    membership also includes benefits, such as discounts and invitations to special events.</p>
                            </div>
                            <div className="school-extra-1 _3">
                                <div className="school-extra-img">
                                    <img src={ManSmiling} alt="man smiling" />
                                </div>
                                <h3>What Girl Scouts Do</h3>
                                <p>Join a distinguished list of partners that invest in the future. Your lifetime
                                    membership also includes benefits, such as discounts and invitations to special events.</p>
                            </div>
                            <div className="school-extra-1 _4">
                                <div className="school-extra-img">
                                    <img src={ManSmiling} alt="man smiling" />
                                </div>
                                <h3>What Girl Scouts Do</h3>
                                <p>Join a distinguished list of partners that invest in the future. Your lifetime
                                    membership also includes benefits, such as discounts and invitations to special events.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs;