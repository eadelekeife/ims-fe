import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

import GridImage from "../assets/images/grid.png";
import TestimonialImage from "../assets/images/testimonial.webp";
import QuoteImg from "../assets/images/quote.svg";
import Students from "../assets/images/students.jpg";
import PrincipalAvatar from "../assets/images/hero1.png";
import { ReactComponent as AboutHeroImage } from "../assets/images/arrow-design.svg";
import { Divider } from "antd";

const AboutUsPage = () => {
    return (
        <div className="about_us">
            <div className="lane-blue">
                <p>Abihome is now Gradoo: Learn all about our name change and our new app in the blog post</p>
            </div>
            <Nav />
            <div className="about_hero">
                <div className="contain">
                    <div>
                        <h5>ABOUT US</h5>
                        <h2>A LOCAL SCHOOL WITH A GLOBAL PERSPECTIVE</h2>
                    </div>
                    {/* <div>
                        <h1>We help online businesses grow. <span>Together.</span></h1>
                        <button className="btn-yellow">Reach out to us</button>
                    </div>
                    <div>
                        <AboutHeroImage />
                    </div> */}
                </div>
            </div>
            <div className="about_hero_story">
                <div className="contain">
                    <div className="about_hero_display">
                        <div className="line-block">
                        </div>
                        <div>
                            <p>Situated within moments of Sydney's CBD, International Grammar School is a unique
                                independent, co-educational, secular school offering quality teaching for early
                                learning, primary and high school students.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_main_story">
                <div className="contain">
                    <div className="center">
                        <h3>Melbourne Girls Grammar is a progressive, contemporary and independent school, which has
                            delivered an exceptional education for girls from Early Learning to Year 12 for 130 years.</h3>
                    </div>
                    <Divider />
                    <img src={Students} alt="students looking at camera" />
                    <p className="main_about_text">Our holistic learning programs are second to none, led by a team of exceptional
                        educators who challenge and maximise the potential of each and every girl.</p>
                    <Divider />
                    <div className="avatar-cover-section">
                        <p className="principal_speech">To educate is to make an intervention into the lives of others. When we intervene, we do so
                            with certain assumptions about the value of what we are doing and why. Building
                            students' capacity for future readiness is a moral-ethical learning endeavour and one that
                            cannot be left to chance. To achieve this, Melbourne Girls Grammar promotes a
                            progressive, contemporary community of practice committed to providing personalised
                            high quality curriculum, wellbeing and co-curricular programs that enable lifelong
                            learning for every student. We are future focused and committed to inspiring our
                            Grammarians and equipping them with the values, knowledge and skills to be ready to
                            make their mark on the world.</p>
                        <div className="avatar-cover-sect">
                            <div className="avatar-cover">
                                <img src={PrincipalAvatar} alt="avatar" className="avatar-img" />
                            </div>
                            <div>
                                <h4>Adeleke Ifeoluwase</h4>
                                <p>Principal</p>
                            </div>
                        </div>
                    </div>
                    <img src={Students} alt="students looking at camera" />
                    <h4>BEYOND THE RED BRICK WALLS</h4>
                    <p className="main_about_text">Melbourne Girls Grammar is committed to developing ethical women of action.</p>
                    <p className="main_about_text">To educate is to make an intervention into the lives of others. When we intervene, we do so
                        with certain assumptions about the value of what we are doing and why. Building
                        students' capacity for future readiness is a moral-ethical learning endeavour and one that
                        cannot be left to chance.</p>
                    <div>
                        <h4>BEYOND THE RED BRICK WALLS</h4>
                        <p className="main_about_text">Melbourne Girls Grammar is committed to developing ethical women of action.</p>
                        <p className="main_about_text">To educate is to make an intervention into the lives of others. When we intervene, we do so
                            with certain assumptions about the value of what we are doing and why. Building
                            students' capacity for future readiness is a moral-ethical learning endeavour and one that
                            cannot be left to chance.</p>
                    </div>
                </div>
            </div>
            {/* <div className="dark-blue-bg">
                <div className="contain">
                    <h1>Flexible and Understanding</h1>
                    <div className="grid-2">
                        <div>
                            <div className="grid-2">
                                <div>
                                    <div className="about-prop-img-cover"></div>
                                    <h2>Flexible and Understanding</h2>
                                    <p>We are all remote with collaboration spaces in NY and Miami. Employees have the
                                        autonomy to build their workday.</p>
                                </div>
                                <div>
                                    <div className="about-prop-img-cover"></div>
                                    <h2>Flexible and Understanding</h2>
                                    <p>We are all remote with collaboration spaces in NY and Miami. Employees have the
                                        autonomy to build their workday.</p>
                                </div>
                                <div>
                                    <div className="about-prop-img-cover"></div>
                                    <h2>Flexible and Understanding</h2>
                                    <p>We are all remote with collaboration spaces in NY and Miami. Employees have the
                                        autonomy to build their workday.</p>
                                </div>
                                <div>
                                    <div className="about-prop-img-cover"></div>
                                    <h2>Flexible and Understanding</h2>
                                    <p>We are all remote with collaboration spaces in NY and Miami. Employees have the
                                        autonomy to build their workday.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={GridImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <img src={TestimonialImage} alt="" />
                        </div>
                        <div>
                            <img src={QuoteImg} className="quote" alt="quote" />
                            <p className="testimonial-content">
                                “Behind Gradoo is our experienced team, which convinces every year with our
                                promise - to offer you an outstanding service with high-quality products at
                                the best price in Germany. We are all remote with collaboration spaces
                                in NY and Miami. Employees have the autonomy to build their workday.”
                            </p>
                            <p className="testimonial-author">&mdash; Adeleke Ifeoluwase, Senior Secondary Student</p>
                            <div className="testimonial-control">
                                <ion-icon name="arrow-back-circle-outline"></ion-icon>
                                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <Footer />
        </div>
    )
}

export default AboutUsPage;