import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

import GridImage from "../assets/images/grid.png";
import TestimonialImage from "../assets/images/testimonial.webp";
import QuoteImg from "../assets/images/quote.svg";
import { ReactComponent as AboutHeroImage } from "../assets/images/arrow-design.svg";

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
                        <h1>We help online businesses grow. <span>Together.</span></h1>
                        <button className="btn-yellow">Reach out to us</button>
                    </div>
                    <div>
                        <AboutHeroImage />
                    </div>
                </div>
            </div>
            <div className="dark-blue-bg">
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
                        {/* <div>
                            <AboutHeroImage />
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUsPage;